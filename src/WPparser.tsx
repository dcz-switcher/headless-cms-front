import { Typography, Quote, Button, ShowMore, Divider } from "mds-react";
import parse, { domToReact } from "html-react-parser";
import attributesToProps from "html-react-parser/lib/attributes-to-props";

export interface WpPageData {
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    }
}

export default function WPparser (WPdata:WpPageData) {


    const parseOption = {
        replace(domNode:any) {
            //console.log(domNode)
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
            } else if (domNode.name === 'details'){
                return (<ShowMore>{domNode.children[2].children[0].data}</ShowMore>)
            } else if (domNode.name === "hr") {
                return (<Divider/>)
            }

        }
    };

    return parse(WPdata?.content?.rendered, parseOption);

}