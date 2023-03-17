import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser',
  standalone: true
})
export class FilterUserPipe implements PipeTransform {

  transform(users:any, search: string): any {
    
    //if no search string, return all users
    if(!search){
      return users
    }

    //filter users if search string
    return users.filter((user: any)=>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
