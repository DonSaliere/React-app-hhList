export default class HhapiService {
    async getResource(url){
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`received ${res.status}`)
        }
        const response = await res.json();
        return response; 
    }

    async getVacancy () {
        const res = await this.getResource('https://api.hh.ru/vacancies/?specialization=1');
        return res.items
    }
}