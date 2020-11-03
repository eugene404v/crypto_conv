import React from 'react'
import LinksList from '../components/LinksList'
import Loader from '../components/Loader'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

function LinksPage() {
    const [links, setLinks] = React.useState([])
    const {loading, request} = useHttp()
    const {token} = React.useContext(AuthContext)

    const fetchLinks = React.useCallback( async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch(e) {

        }
    }, [token, request])

    React.useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            {!loading && <LinksList links={links}/>}
        </div>
    )
}

export default LinksPage


