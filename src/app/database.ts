import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Database {
	dbName = "Task"
	storeName = "Task"

	constructor() {
		this.initDb();
	}

	private initDb() {
		const request = indexedDB.open(this.dbName, 1);

		request.onupgradeneeded = (event: any) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains(this.storeName)) {
				db.createObjectStore(this.storeName, { autoIncrement: true });
			}
		};

		request.onerror = (event) => {
			console.error('Database error:', event);
		};
	}
	public saveTask(task: any): Promise<number> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName);
			request.onsuccess = (event: any) => {
				const db = event.target.result;
				const transaction = db.transaction(this.storeName, 'readwrite');
				const store = transaction.objectStore(this.storeName);

				const addRequest = store.add(task);
				addRequest.onsuccess = () => resolve(addRequest.result);
				addRequest.onerror = () => reject("error");
			};
			request.onerror = (event) => reject(event);
		});
	}

	public getTasks(): Promise<any[]> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName);
			request.onsuccess = (event: any) => {
				const db = event.target.result;
				const transaction = db.transaction(this.storeName, 'readonly');
				const store = transaction.objectStore(this.storeName);
				const getAllRequest = store.getAll();

				getAllRequest.onsuccess = () => resolve(getAllRequest.result);
				getAllRequest.onerror = () => reject("error");
			};
			request.onerror = (event) => reject(event);
		});
	}
}

