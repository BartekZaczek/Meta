public class StartBatch {
    @AuraEnabled
    public static String start(){
        String q = 'SELECT Email, Id FROM Contact';
        Id jobId = Database.executeBatch(new SendEmailBatch(q));
        Data__c data = new Data__c(Name = String.valueOf(jobId));
        List<Data__c> l = new List<Data__c>();
        l.add(data);
        insert l;
        return 'Success';
    }
}