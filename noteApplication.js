class Note {
	constructor(note_content, author){
		this.author = author;
		this.note_content = note_content;
	}
	
}

class NoteApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
	
	
	create(note_content) {
		var note = new Note(note_content, this.author)
		this.notes.push(note);
	}
	
	listNotes() {
		for(var i = 0; i < this.notes.length; i++){
			console.log("Note_ID" + i);
			console.log(this.notes[i].note_content);
			console.log("By Author: ", this.notes[i].author);
		} 
	}
	get(note_id){
		if (this.notes[note_id])
		 return this.notes[note_id]
		else 
		 return null;
	}
	search(search_text){
		var filtered = this.notes.filter(function (note) {
			//return search_text != -1;
			return note.note_content.indexOf(search_text) !== -1
		});
		console.log(filtered)
	}
	
	delete(note_id){
		this.notes.splice(note_id);
	}
	edit(note_id, new_content){
	var note = this.get(note_id);
	    note.note_content = new_content; 
	}
}

var na = new NoteApplication("Tosin");
//na.delete(0)
//na.create("gfjgjhgjhgjgjhgjhg")
//na.create("i am getting old")
//na.search("i")
//na.edit(0,"ertet")
console.log(na.get(0));
//na.listNotes();

