if(head.data>head.next.data){
    let flag1=true;
    let pointer =head.next;
    while(pointer.next)
    {
        if(flag1){
            if(!(pointer.data<pointer.next.data)) return "false";
            flag1=!flag1;
        }
        else{
            if(!(pointer.data>pointer.next.data)) return "false";
            flag1=!flag1;
        }
        pointer=pointer.next;
    }
    return "true"
}
else{
    let flag2=true;
    let pointer =head.next;
    while(pointer.next)
    {
        if(flag2){
            if(!(pointer.data>pointer.next.data)) return "false";
            flag2=!flag2;
        }
        else{
            if(!(pointer.data<pointer.next.data)) return "false";
            flag2=!flag2;
        }
        pointer=pointer.next;
    }
    return "true";
}