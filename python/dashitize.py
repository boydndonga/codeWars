# Given a number, return a string with dash'-'marks before and 
# after each odd integer, but do not begin or end the string with a dash mark.
# dashatize(274) -> '2-7-4'
# dashatize(6815) -> '68-1-5'

def dashatize(num):
   if isinstance(num,int):
       a=list(str(abs(num)))
       d=''.join(['-'+x+'-' if int(x)%2!=0 else x for x in a])
       if d[len(d)-1]=='-':
           d=d[:-1]
       if d[0]=='-':
           d=d[1:]
       d=d.replace('--','-')
       return d
   else:
       return 'None'