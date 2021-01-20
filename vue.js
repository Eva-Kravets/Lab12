const vm = new Vue({
    el: '#app',
    data: {
        students: [],

        idLast: 0,

        isDisabled: true,

        surnameInput: '',
        firstnameInput: '',
    },
    methods: {
        addStudents(e) {
            e.preventDefault();
            this.idLast += 1;

            let firstNameModified = this.firstnameInput[0].toUpperCase() + this.firstnameInput.toLowerCase().slice(1),
                surnameModified = this.surnameInput[0].toUpperCase() + this.surnameInput.toLowerCase().slice(1)

            this.students.push({
                firstname: firstNameModified,
                surname: surnameModified,
                id: this.idLast
            });

            this.clearForm();
        },

        validate() {
            if (this.firstnameInput && this.surnameInput)
                this.isDisabled = false
            else
                this.isDisabled = true
        },

        clearForm() {
            this.surnameInput = '';
            this.firstnameInput = '';
            this.isDisabled = true;
        }
    },

    
})