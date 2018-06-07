export const getVisibleRecords = (records, filter) => {
    switch (filter.filter) {
        case "no":
            return records;
        case "in":
            return records.filter(record => record.selected === true)
        case "out":
            return records.filter(record => record.selected !== true)
        default:
            return records
    }
}