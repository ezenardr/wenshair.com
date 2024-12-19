'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Service1 from "@/components/sections/Service1";
import TextSLider1 from "@/components/sections/TextSLider1";
export default function Service() {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nos Services">
                <div>
                        <div className="container">
                            <Service1 showActionLink={false}/>
                        </div>
                    {/* Text SLider Start */}
                   <TextSLider1/>
                    {/* Text Slider End */}
                </div>

            </Layout>
        </>
    )
}