import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import EXPENSE_NAME from '@salesforce/schema/Expense__c.Name';
import EXPENSE_CATEGORY from '@salesforce/schema/Expense__c.Category__c';
import EXPENSE_DATE from '@salesforce/schema/Expense__c.Expense_Date__c';
import EXPENSE_AMOUNT from '@salesforce/schema/Expense__c.Amount__c';
import EXPENSE_WEEKLY from '@salesforce/schema/Expense__c.Weekly_Expense__c';
import EXPENSE_MONTHLY from '@salesforce/schema/Expense__c.Monthly_Expense__c';

export default class ExpenseCreator extends LightningElement {

    nameField = EXPENSE_NAME;
    CategoryField = EXPENSE_CATEGORY;
    Expense_DateField = EXPENSE_DATE;
    AmountField = EXPENSE_AMOUNT;
    Weekly_ExpenseField = EXPENSE_WEEKLY;
    Monthly_ExpenseField = EXPENSE_MONTHLY;

    handleSubmit(event) {

        console.log('handleSubmit');
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess() {

        const evt = new ShowToastEvent({
            title: 'SUCCESS',
            message: 'Expense Created',
            variant: 'SUCCESS'
        });
        this.dispatchEvent(evt);
        this.handleReset();
    }

    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}