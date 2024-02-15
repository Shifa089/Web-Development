import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class FileService {
    client = new Client();
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProjectId);
        this.bucket = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }

    //extra functionality
    downloadFile(fileId){
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const fileservice = new FileService();

export default fileservice;