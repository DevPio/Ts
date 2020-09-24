class FormateDate{
    

    public formate(value:string): string {

        const data = new Date(value)
        const dia = data.getDate()
        const mes = data.getMonth()
        const ano = data.getFullYear()


        return `${dia}-${mes}-${ano}`
    }

}