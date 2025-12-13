import { Box, Loader, Typography } from "mds-react";
import HeaderFragment from "./fragments/HeaderFragment";
import { useEffect, useState } from "react";
import WPparser from "./WPparser";

function Exemple() {
    

    const [data, setData] = useState<any | null>(null);
    

    useEffect(() => {
        fetch("https://wp.deltacharliezulu.fr/wp-json/wp/v2/pages/2")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(er => console.error(er));
        
        const timer = window.setTimeout(() => {
            document.dispatchEvent(new Event('DOMContentLoaded', {
              bubbles: true,
              cancelable: true
            }));
        }, 1000)

        console.log('useEffetc ...');

        return (() => {
            window.clearTimeout(timer);
        })
    }, []);


    return (
        <>
            <HeaderFragment/>

            <div className="mds-container">
                <div className="mds-row">
                    <div className="mds-col mds-col-md-8">
                        <Box>
                            {data ? 
                            <>
                                <Typography variant="h1">{data?.title?.rendered}</Typography>
                                <Box className="mds-stack-t--24">
                                    {WPparser(data)}
                                </Box>
                            </>
                            : 
                                <Box className="mds-stack-t--24">
                                    <Loader/>    
                                </Box>
                            }
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exemple;