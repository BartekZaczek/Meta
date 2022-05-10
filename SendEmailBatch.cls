global class SendEmailBatch implements Database.Batchable<SObject>{
    global String query;
    final String NUMBERq = '698233508';
   
    
    global SendEmailBatch(String query) {
        this.query = query;
    }
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext bc, List<Contact> scope){
    
    }

    global void finish(Database.BatchableContext bc) {
        List<Contact> con = [SELECT Email, Id FROM Contact WHERE Phone =: NUMBERq LIMIT 1];
        String q = con[0].Email;
        EmailManager.sendMail(q, 'Test3', 'body');
    } 
}