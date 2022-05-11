public class ShowMeta {
    @AuraEnabled(cacheable=true)
    public static List<MyCustomDataWrapper> getMeta(){
        List<MyCustomDataWrapper> wrapperList = new List<MyCustomDataWrapper>();

        MyCustomData__mdt[] intt = [SELECT order__c, label FROM MyCustomData__mdt];

        for (MyCustomData__mdt cData : intt) {
            MyCustomDataWrapper w = new MyCustomDataWrapper();
            w.label = cData.label;
            w.order = (Integer)cData.order__c;
            wrapperList.add(w);
        }
        
        MyCustomDataWrapper[] tab = new  MyCustomDataWrapper[wrapperList.size()];

        for (MyCustomDataWrapper wrapper : wrapperList) {
            tab[wrapper.order-1] = wrapper;
        }
       
        List<MyCustomDataWrapper> orderList = new List<MyCustomDataWrapper>(tab);
        
        return orderList;
    }

    public class MyCustomDataWrapper{
        @AuraEnabled
        public String label;
        @AuraEnabled
        public Integer order; 
    }
}
