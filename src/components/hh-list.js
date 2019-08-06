import React, { Component } from 'react';
import HhapiServices from '../services/hhapi-services'

export default class HhList extends Component {

  HhapiServices = new HhapiServices();

  state = {
    vacancy: []
  };

  constructor() {
    super();
    this.updateVacancy();
  }

  updateVacancy() {
    this.HhapiServices
      .getVacancy()
      .then((vacancy) => {
          this.setState({
            vacancy
          });
      });
  }


  render() {
    const {vacancy} = this.state;
    return (
        <div>
        <table className = "table">
            <thead>
            <tr>
                <th className = "align-center" >
                    Должность
                </th>  
                <th className = "align-center">
                    Зарплата                 
                </th>  
                <th className = "align-center">
                    Город
                 </th>  
                <th className = "align-center" >
                    Обязанности 
                </th>      
            </tr>   
            </thead>
            <tbody>
                {vacancy.map(item => (
                    <tr key={item.id}>              
                        <td className = "align-center">{item.name}</td>
                        <td className = "align-center">{item.salary ? (item.salary.from == null ? ' ': 'от ' + item.salary.from) + '  ' + (item.salary.to == null ? ' ': ' до ' + item.salary.to) + ' ' + item.salary.currency: 'не указана'}</td>
                        <td className = "align-center">{item.area ? item.area.name: 'не указан'}</td>
                        <td className = "align-center">{item.snippet.responsibility}</td>
                    </tr>
                ))}  
            </tbody>  
        </table>  
    </div>    

    );
  }
}
