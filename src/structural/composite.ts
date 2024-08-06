interface IFileSystemComponent {
   showDetails(): void;
}

class FileLeaf implements IFileSystemComponent {
   private name: string;

   constructor(name: string) {
      this.name = name;
   }

   public showDetails(): void {
      console.log(`File: ${this.name}`);
   }
}

class FolderComposite implements IFileSystemComponent {
   private name: string;
   private components: IFileSystemComponent[] = [];

   constructor(name: string) {
      this.name = name;
   }

   public addComponent(component: IFileSystemComponent): void {
      this.components.push(component);
   }

   public removeComponent(component: IFileSystemComponent): void {
      const index = this.components.indexOf(component);
      if (index !== -1) {
         this.components.splice(index, 1);
      }
   }

   public showDetails(): void {
      console.log(`Folder: ${this.name}`);
      for (const component of this.components) {
         component.showDetails();
      }
   }
}

// Uso
const file1 = new FileLeaf("File1.txt");
const file2 = new FileLeaf("File2.txt");
const file3 = new FileLeaf("File3.txt");

const folder1 = new FolderComposite("Documents");
const folder2 = new FolderComposite("Images");

folder1.addComponent(file1);
folder1.addComponent(file2);
folder2.addComponent(file3);

const rootFolder = new FolderComposite("Root");
rootFolder.addComponent(folder1);
rootFolder.addComponent(folder2);

rootFolder.showDetails();