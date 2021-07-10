#! /usr/bin/python3
# -*- coding: utf-8 -*-

import cgi
#import cgitb
import json
#import datetime
import library
import numpy as np
from SQL1 import MySQL

def sqltime(str):
    return str[0:4]+str[5:7]+str[8:10]+str[11:13]+str[14:16]+str[17:19]

db=MySQL().user()
cur=db.cursor()
exe=cur.execute 

form=cgi.FieldStorage()
variables = form.getvalue("variables")
time = form.getvalue("timePeriod")
lab = form.getvalue("lab")

if lab == "CA":
    base = 'aerosol.meteo'
elif lab == "IHOS":
   base = 'IHOS.ihos'

vars = variables.split(',')
end,start = time.split(',')
req_time = library.timeSpliter(start,end)
output = []
for j in range(len(req_time)):
    year = req_time[j][0]
    time1 = sqltime(req_time[j][1])
    time2 = sqltime(req_time[j][2])
    txt = """SELECT {vars} from {database}_{table} where DateTimeUTC between {st} and {et};""" \
            .format(vars=variables,database=base,table=year,st=time1,et=time2)
    exe(txt)
    output.extend(cur.fetchall())
output=np.array(output).transpose()
zipper=zip(vars,output.tolist())
response=dict(zipper)

print("Content-Type: text/plain")
print("Access-Control-Allow-Origin: *")
print("")
#print(variables,start,end)
#print(response)
print(json.dumps(response))
