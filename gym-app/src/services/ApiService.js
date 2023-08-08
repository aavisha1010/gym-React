import React from 'react'
import axios from 'axios';
import { API_URL } from './API_URL';

class ApiService {
    getListOfBatches() {
        return axios.get(API_URL + "batches/").then(response => {
            return response.data;
        })
    }
    getAllEnquiryData()
    {
        return axios.get(API_URL + "enquiry/").then(response => {
            return response.data;
        })
    }
    getAllPackages()
    {
        return axios.get(API_URL+"package/").then(response =>
            {
                return response.data;
            })
    }
    getAllMember()
    {
        return axios.get(API_URL+"member/").then(response =>
            {
                return response.data;
            })
    }

    getSingleEnquiry({eid})
    {
        return axios.get(API_URL+"enquiry/"+eid).then(response =>
            {
                return response.data;
            })
    }
    getSinglePackage({pid})
    {
       
        return axios.get(API_URL+"package/"+pid).then(response =>
            {
                return response.data;
            })
    }
    getSingleBatches({bid})
    {
       
        return axios.get(API_URL+"batches/"+bid).then(response =>
            {
                return response.data;
            })
    }



    addEnquiryData(data)
    {
        return axios.post(API_URL+"enquiry/",data).then(response=>
            {
                return response.data;
            })
    }
    addMember(data)
    {
        return axios.post(API_URL+"member/",data).then(response=>
            {
                return response.data;
            })
    }


}

export default new ApiService();