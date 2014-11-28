#!/bin/sh
#
#http://www.real-blog.com/linux-bsd-notes/125
#MySQL �ƥ� shell scriptMarch 21, 2006 @ 12:35 pm �P Filed under Linux / BSD ���O, �{���]�p���� 
#
#�o�ӬO�ڤ�`�Χ@�ƥ� MySQL database �� shell script�A�]���H�e�O�����N�Ҧ���Ʈw�ץX���@�� sql �ɡA
#��䤤�@�Ӹ�Ʈw�����D�ɡA�]���S���D����Ʈw���Q����ʡA�n�_���ƫܳ·СC
#���ѧ�F�@�U�A���|�� mysqldump �N�Ҧ���Ʈw�ץX���W�� sql �ƥ��ɡA�M��� gzip ���Y�� .gz �ɮסC
#�{���|�x�s 5 �Ѫ��ƥ��A���s�ƥ��ɡA���ª��ƥ��|�۰ʧR���C
#
#�ϥΤ�k:
#�ק� db_user, db_passwd �� db_host �ק令�A�� mysql �n�J��ơA�ҨϥΪ��Τ��v���ݭn�P mysql root �ۦP�C
#backup_dir �ק令�A�Ʊ��x�s�ƥ����ؿ��C
#�̫�u�n��{���[�J crontab �Ƶ{�۰ʰ���Y�i�C
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