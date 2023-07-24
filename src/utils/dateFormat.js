import moment from "moment"

export const dateFormat = (timestamp) => {
    const date = new Date(timestamp);

    return moment(date).format("DD/MM/YYYY");
}