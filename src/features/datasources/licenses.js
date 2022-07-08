import { axios } from 'axios';


export function LicensesDataSource() {
    this.queryAll = 'http://localhost:3001/api/v1/products/query/all';

};

LicensesDataSource.prototype.getAll = async ()=>{
    this.licenses = await axios.get(this.queryAll)

    return this.licenses
}