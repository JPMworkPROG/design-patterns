class DatabaseConnection {
   private static instance: DatabaseConnection | null = null;
   private connection: string;

   private constructor() {
      console.log("Create singleton instance");
     this.connection = "Active connection.";
   }
 
   public static getInstance(): DatabaseConnection {
     if (DatabaseConnection.instance === null) {
       DatabaseConnection.instance = new DatabaseConnection();
     }
     return DatabaseConnection.instance;
   }
 
   public getConnectionStatus(): string {
     return this.connection;
   }
 }
 
 const db1 = DatabaseConnection.getInstance();
 const db2 = DatabaseConnection.getInstance();
 
 console.log(db1.getConnectionStatus()); 
 console.log(db2.getConnectionStatus()); 
 
 console.log(db1 === db2);