import { Box, Button, Quote, Typography } from "mds-react";
import HeaderFragment from "./fragments/HeaderFragment";
import { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import attributesToProps from "html-react-parser/lib/attributes-to-props";

function Exemple() {
    
    interface WpPageData {
        title: {
            rendered: string;
        };
        content: {
            rendered: string;
        }
    }

    const [data, setData] = useState<WpPageData | null>(null);
    

    useEffect(() => {
        fetch("https://wp.deltacharliezulu.fr/wp-json/wp/v2/pages/2")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(er => console.error(er));
    }, []);


    const parseOption = {
        replace(domNode:any) {
            console.log(domNode)
            if (domNode.name === 'p') {
                return (<Typography className="mds-stack-b--24">{domToReact(domNode.children, parseOption)}</Typography>)
            } else if (domNode.name === 'blockquote') {
                return (<Quote>{domNode.children[1].children[0].data}</Quote>)
            } else if (domNode.attribs?.class === "wp-block-button"){
                return (<Button>{domNode.children[0].children[0].data}</Button>)
            } else if (domNode.attribs?.class === "wp-block-button is-style-outline is-style-outline--1"){
                return (<Button variant="secondary">{domNode.children[0].children[0].data}</Button>)
            } else if (domNode.name === 'img'){
                let props = attributesToProps(domNode.attribs);
                return <img src={props.src} style={{maxWidth: '100%', height: 'auto'}}/>
                
            }

        }
    };

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
                                    {parse(data?.content?.rendered, parseOption)}
                                </Box>
                            </>
                            : 
                                'Loading ...'}
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exemple;