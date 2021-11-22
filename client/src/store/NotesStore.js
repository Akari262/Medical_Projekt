import {makeAutoObservable} from "mobx";

export default class NotesStore {
    constructor() {
        this._notes =[
            {id: 1, id_patient: 1, id_doctor: 5, date: "03.08.2021", name: "Запис 1", text: "Текст запису 1", recomendation: "Рекомендація по лікуванню 1"},
            {id: 2, id_patient: 2, id_doctor: 5, date: "04.08.2021", name: "Запис 2", text: "Текст запису 2", recomendation: "Рекомендація по лікуванню 2"},
            {id: 1, id_patient: 1, id_doctor: 4, date: "04.08.2021", name: "Запис 3", text: "Текст запису 3", recomendation: "Рекомендація по лікуванню 3"},
        ]
        this._selectedNotes = {}
        makeAutoObservable(this)
    }

    setSelectedNotes(id) {
        this._selectedNotes = id
    }

    setNotes(notes) {
        this._notes = notes
    }

    get notes() {
        return this._notes
    }

    get selectedNotes() {
        return this._selectedNotes
    }
}