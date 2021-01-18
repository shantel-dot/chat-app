import { db } from "../services/firebase";

export function readChats() {
    let abc = [];
    db.ref("chats").on("value", snapshot => {
        snapshot.forEach( snap => {
            abc.push(snap.val())
        });
        return abc;
    });
}

export function writeChats(message) {
    return db.ref("chats").push({
        content: MessageChannel.content,
        timestamp: MessageChannel.timestamp,
        uid: MessageChannel.uid
    })
}