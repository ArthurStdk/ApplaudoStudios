public with sharing class ExpenseController {
    
    @AuraEnabled(cacheable=true)
    public static List<Expense__c> getExpenses() {

        System.debug('getExpenses');
        List<Expense__c> lstExpenses = [SELECT Id, Name, Category__c, Expense_Date__c, Amount__c, Weekly_Expense__c, Monthly_Expense__c FROM Expense__c];

        return lstExpenses;
    }
}