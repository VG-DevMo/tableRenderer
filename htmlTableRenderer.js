const tableRenderer = {
    tableCode: [],
    tableHeader: '',
    tableLine: '',
    /**
     * starts the table rendering
     * @param {String} containerId 
     * @param {Array} data 
     */
    start: function (containerId, data) {
        console.log(data);
        var oContainer = document.getElementById(containerId);
        var table = oContainer.innerHTML;
        var matches = table.match(/(<tr>(.*?)tr>)/igm);
        this.tableHeader = matches[0];
        this.tableLine = matches[1];
        oContainer.innerHTML = "";
        this.tableCode.push('<table>');
        this.writeHeader();    
        this.writeBody(data);
        this.tableCode.push('</table>');
        var htmlString = '';
        this.tableCode.forEach(element => {
            htmlString = htmlString + element;
        });
        oContainer.innerHTML = htmlString;
        console.log(this);
    },
    writeHeader: function () {
        this.tableCode.push(this.tableHeader);
    },
    writeBody: function (data) {
        data.forEach(element=>{
            this.writeLine(element);
        });
    },
    writeLine: function (object) {
        var line = this.tableLine;
        for (x in object) {
            console.log(x);
            line = line.replace(('{' + x + '}'), object[x].toString());
        }
        this.tableCode.push(line);
    }
}
