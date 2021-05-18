import React from 'react'
import styled from "styled-components";




export const CvText = () => {
return (
    <Main>
        <ProfilImage></ProfilImage>
        <Header>EDUCATIONS:</Header>
        <Text>2021, Frontend Developer, Technigo, 24 weeks bootcamp</Text>
        <Text>2017, Digital Marketing, Hyper Island, 6 weeks course</Text>
        <Text>2002-2007, Master, Fine Art Academy, Umeå</Text>
        <Text>2004-2005, Hanoi University of Fine Art</Text>
        <Text>2204-2005, Hanoi Language Institute, Vietnamese</Text>
        <Header>SOLO EXHIBITIONS:</Header>
        <Text>2015, 'Strax under ytan' Solo Exhibition at Galleri Kronan, Norrköping</Text>
        <Text>2010, 'Independent, Free, Happy' Abandoned Gallery, Malmö</Text>
        <Text>2008, 'Birds Of Passage' Gallery Pictura, Lund</Text>
        <Text>2008, 'Birds Of Passage' Gallery Syster, Luleå</Text>
        <Text>2008, 'Birds Of Passage' Gallery Verkligheten, Umeå</Text>
        <Header>PUBLIC WORK:</Header>
        <Text>(-2022), Umeå Universitetsjukhus. Västerbottens läns landsting </Text>
        <Text>2017, Permanent outdoor installation at Dynamiten. Botkyrka kultur- och fritidsnämnd</Text>
        <Text>2008, Stage-light and sound, Permanent installation, Löa hytta, Västmanlan</Text>
        <Header>GROUP EXHIBITIONS:</Header>
        <Text>2017, 'Artists Roles/Artists Rules' TCG Nordica, Kunming/China</Text>
        <Text>2016, 'Artists Roles/Artists Rules' Studio44, Stockholm 2016</Text>
        <Text>2016, 'Supermarket Art Fair' Stockholm,</Text>
        <Text>2015, 'Map of the new art' FONDAZIONE GIORGIO CINI, Venedig/Italy</Text>
        <Text>2014, 'Sense of Loss-en bråddjup utställning om sorg' Studio 44, Stockholm</Text>
        <Text>2009, 'The Other Side', Studio Tho, Hanoi/Vietnam </Text>
        <Text>2009, 'What Is Identity?', Museum of Vietnam University of Fine Arts, Hanoi/Vietnam</Text>
        <Text>2009, 'The pARTy', Hanoi Future Art, Hanoi/Vietnam</Text>
        <Text>2007, 'ALT', Uppsala Art museum, Uppsala</Text>
        <Text>2007, 'Free your mind', Swedbank Arena, Örnsköldsvik</Text>
        <Text>2007, Supermarket of Art IV/2', International biennial, Warsaw/Polen</Text>
        <Header>SCREENINGS AND FILM FESTIVALS:</Header>
        <Text>2009, 'Objektivfestivalen', Stockholm</Text>
        <Text>2009, 'Videokonstfestivalen', Gävle</Text>
        <Text>2009, 'Filmform News', Cinemateket, Stockholm</Text>
        <Text>2009, 'Oberhausen Short Film Festival', ' Unreal Asia', Germany</Text>
        <Text>2008, '25th Kassel Documentary Film & Video Festival', Germany </Text>
        <Text>2008, 'Market Video Library', Clermont-Ferrand Short Film, France</Text>
        <Text>2006 & 2007, 'Umeå Film Festival', Umeå</Text>
        <Header>GRANTS:</Header>
        <Text>2011, Konstnärsnämden, Kostnadskrävande</Text>
        <Text>2009, Konstnärsnämden, Arbetstipendium</Text>
        <Text>2008, Konstnärsnämden, Internationellt kulturutbyte</Text>
        <Text>2007, Anna-Lisa Thomson Till Minne</Text>
        <Text>2007, Galleri Verkligheten</Text>
        <Text>2007, Helge Ax: son Johnson</Text>
        <Text>2007, Fredrik Roos konstnärsstipendium</Text>
        <Text>2007, Georg Suttners måleristipendium</Text>
        <Text>2006 & 2007; JC Kempes Minnes Stipendiefond</Text>
        <Header>PUBLICATIONS:</Header>
        <Text>2015, Archive of Visions and Actions, Sweden. Imago Mundi,curator Paula Von Seth</Text>
        <Text>2009, Trao Doi, Exchange 2002-2009, curator Christoffer Fredriksson & La Anh Van</Text>
        <Text>2007, Projekt 07, Konsthögskolan Umeå Universitet</Text>
    </Main>
)
}

const Main = styled.div`
    margin: 20px;
`

const ProfilImage =styled.img`
`
const Header = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #fc4103;
    font-family: 'Roboto Mono', monospace;
    margin-top:30px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: #fc4103;
    font-family: 'Roboto Mono', monospace;
`