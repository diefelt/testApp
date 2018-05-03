import { WhereFilterOp } from "@firebase/firestore-types";

export class Where {

    field: string;
    operator: WhereFilterOp;
    value: any;


    constructor(_field, _operator, _value){
        this.field = _field;
        this.operator = _operator;
        this.value = _value
    }
}