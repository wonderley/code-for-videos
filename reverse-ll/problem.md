
# Reverse a linked list
Turn
[1]->[2]->[3]
into
[3]<-[2]<-[1]

Strategy:
[1]->[2]->[3]
cur  next
[1]  [2]->[3]
prev cur  next
[1]<-[2]  [3]
     prev cur
[1]<-[2]<-[3]
          prev