import { LightningElement, wire, track } from 'lwc';

import getExpensesList from '@salesforce/apex/ExpenseController.getExpenses';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Category', fieldName: 'Category__c' },
    { label: 'Expense Date', fieldName: 'Expense_Date__c', type: 'date' },
    { label: 'Amount', fieldName: 'Amount__c', type: 'currency' },
    { label: 'Weekly Expense', fieldName: 'Weekly_Expense__c', type: 'checkbox' },
    { label: 'Monthly Expense', fieldName: 'Monthly_Expense__c', type: 'checkbox' }
];

export default class ExpenseList extends LightningElement {

    @track expensesList;
    @track error;
    columns = columns;

    @wire(getExpensesList) wiredExpenses({ error, data }) {
        if (data) {
            this.expensesList = data;
        } else if (error) {
            this.error = error;
        }
    }

    connectedCallback() {

        //console.log('expensesList: ', this.expensesList);
    }
}