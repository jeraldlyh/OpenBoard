import useSWR from "swr"
import _ from "lodash"
import moment from "moment"

interface User {
    root_id: string,
    registeredDateTime: Date,
    username: string,
    password: string,
    bio: string,
    name: string,
    dateOfBirth: Date,
    email: string,
    address: string,
    mobileNumber: string,
    socials: {
        website: string,
        github: string,
        twitter: string,
        instagram: string,
        facebook: string
    }
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

function filterByOneWeek(users: Array<User>) {
    return _.filter(users, function (user) {
        const currentDate = moment()
        const registeredDate = moment(user.registeredDateTime)
        const diff = currentDate.diff(registeredDate, "days")
        return diff <= 7
    })
}

function filterByTwoWeek(users: Array<User>) {
    return _.filter(users, function (user) {
        const currentDate = moment()
        const registeredDate = moment(user.registeredDateTime)
        const diff = currentDate.diff(registeredDate, "days")
        return diff <= 14
    })
}

export default function useUser(id: string) {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)
    const filterOneWeek = filterByOneWeek(data)
    const filterTwoWeek = filterByTwoWeek(data)
    const increasePercent = ((filterOneWeek.length - filterTwoWeek.length) / filterTwoWeek.length).toFixed(2)

    return {
        users: _.merge(data, {
            increasePercent: increasePercent
        }),
        isLoading: !error && !data,
        isError: error
    }
}