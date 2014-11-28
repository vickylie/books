#!/bin/sh
#
#http://www.real-blog.com/linux-bsd-notes/125
#MySQL 備份 shell scriptMarch 21, 2006 @ 12:35 pm · Filed under Linux / BSD 筆記, 程式設計分享 
#
#這個是我日常用作備份 MySQL database 的 shell script，因為以前是直接將所有資料庫匯出成一個 sql 檔，
#當其中一個資料庫有問題時，因為沒問題的資料庫不想有改動，要復原資料很麻煩。
#今天改了一下，它會用 mysqldump 將所有資料庫匯出成獨立 sql 備份檔，然後用 gzip 壓縮成 .gz 檔案。
#程式會儲存 5 天的備份，當有新備份時，最舊的備份會自動刪除。
#
#使用方法:
#修改 db_user, db_passwd 及 db_host 修改成你的 mysql 登入資料，所使用的用戶權限需要與 mysql root 相同。
#backup_dir 修改成你希望儲存備份的目錄。
#最後只要把程式加入 crontab 排程自動執行即可。
#
#
# mysql_backup.sh: backup mysql databases and keep newest 5 days backup.
#
# Last updated: 20 March 2006
# ----------------------------------------------------------------------
# This is a free shell script under GNU GPL version 2.0 or above
# Copyright (C) 2006 Sam Tang
# Feedback/comment/suggestions : http://www.real-blog.com/
# ----------------------------------------------------------------------

# your mysql login information
# db_user is mysql username
# db_passwd is mysql password
# db_host is mysql host
# -----------------------------
db_user="root"
db_passwd=""
db_host="localhost"

# the directory for story your backup file.
backup_dir="/root/backup/"

# date format for backup file (dd-mm-yyyy)
time="$(date +"%Y-%m-%d")"

# mysql, mysqldump and some other bin's path
MYSQL="$(which mysql)"
MYSQLDUMP="$(which mysqldump)"
MKDIR="$(which mkdir)"
RM="$(which rm)"
MV="$(which mv)"
GZIP="$(which gzip)"

# check the directory for store backup is writeable
test ! -w $backup_dir && echo "Error: $backup_dir is un-writeable." && exit 0

# the directory for story the newest backup
test ! -d "$backup_dir/backup.0/" && $MKDIR "$backup_dir/backup.0/"

# get all databases
all_db="$($MYSQL -u $db_user -h $db_host -p$db_passwd -Bse 'show databases')"

for db in $all_db
do
    $MYSQLDUMP -u $db_user -h $db_host -p$db_passwd $db | $GZIP -9 > "$backup_dir/backup.0/$time.$db.gz"
done

# delete the oldest backup
test -d "$backup_dir/backup.5/" && $RM -rf "$backup_dir/backup.5"

# rotate backup directory
for int in 4 3 2 1 0
do
    if(test -d "$backup_dir"/backup."$int")
    then
        next_int=`expr $int + 1`
        $MV "$backup_dir"/backup."$int" "$backup_dir"/backup."$next_int"
    fi
done

exit 0;