import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch, useSelector} from "react-redux";
import { useHttp } from '../hooks/http.hook'
import LinkCard from '../components/LinkCard'

function DetailPage() {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.authReducer)
    const [link, setLink] = React.useState(null)
    const linkId = useParams().id
    const {request, loading} = useHttp()
    const getLink = React.useCallback(
        async () => {
            try {
                const fetched = await request(`/api/link/${linkId}`, 'GET', null, {authorization: `Bearer ${token}`})
                setLink(fetched)
            } catch(e) {

            }
        },
        [token, linkId, request],
    )

    React.useEffect(()=>{
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && link && <LinkCard link={link} />}
        </>
    )
}

export default DetailPage

