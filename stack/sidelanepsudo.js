useSideLane(trucks, n):
    stack sidelane;
    int currectTruck = 1;
   for(int i=0;i<n;i++) {
      while(!sidelane.empty()) {
          if(sidelane.top()==currectTruck) {
            sidelane.pop();
          currectTruck++;
        } else {
          break;
        }
      }
      if(currectTruck!=trucks[i]) {
          sidelane.push(t);
      } else {
          currectTruck++;
      }
   }
   while(!sidelane.empty()) {
     if(sidelane.top()==currectTruck) {
            sidelane.pop();
          currectTruck++;
        }else{
          break;
        }
   }
   return sidelane.empty()?"yes":"no"//if sidelane is empty return yes else return no