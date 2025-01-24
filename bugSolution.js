```javascript
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } }, (err, res) => {
  if (err) {
    console.error("Error updating document:", err);
  } else if (res.modifiedCount === 0) {
    console.warn("Document not found. No update performed.");
  } else {
    console.log("Document updated successfully.");
  }
});
```