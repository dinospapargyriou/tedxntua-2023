import * as React from 'react';
import Page from '../components/Page';
import PageHead from '../components/PageHead';
import {Partner} from "../components/Partner"
import * as PartnersStyles from "../styles/partners.module.css"
import { Container } from 'reactstrap';
import * as Styles from "../styles/main.module.css"
import { usePartnersData } from '../hooks';
import { useLocaleContext } from '../contexts/LanguageContext';

const pageTitle = 'Partners';

const Partners = () => {
    const {locale} = useLocaleContext();
const partnersData = usePartnersData(locale);

const KnowledgePartners = partnersData.map(type=>{
    if(type.sponsorLevel === "knowledge"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
const PlatinumSponsors = partnersData.map(type=>{
    if(type.sponsorLevel === "platinum"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
const GrandSponsors = partnersData.map(type=>{
    if(type.sponsorLevel === "grand"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
})
const Partners = partnersData.map(type=>{
    if(type.sponsorLevel === "partner"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
const Supporters = partnersData.map(type=>{
    if(type.sponsorLevel === "supporter"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
const Media = partnersData.map(type=>{
    if(type.sponsorLevel === "media"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
const Community = partnersData.map(type=>{
    if(type.sponsorLevel === "community"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerSiteUrl} image={type.image}/>
    }
    return;
})
    return (
        <Page currentPage={`partners`}>
            <Container className={PartnersStyles.container}>
                <div className={PartnersStyles.titles}>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Knowledge Partner</h1>
                        <div className={PartnersStyles.section}>{KnowledgePartners}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Platinum Sponsors</h1>
                        <div className={PartnersStyles.section}>{PlatinumSponsors}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Grand Sponsors</h1>
                        <div className={PartnersStyles.section}>{GrandSponsors}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Partners</h1>
                        <div className={PartnersStyles.section}>{Partners}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Supporters</h1>
                        <div className={PartnersStyles.section}>{Supporters}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Media</h1>
                        <div className={PartnersStyles.section}>{Media}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title}`}>Community</h1>
                        <div className={PartnersStyles.section}>{Community}</div>
                    </div>
                </div>
            </Container>
        </Page>
        
    );
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;