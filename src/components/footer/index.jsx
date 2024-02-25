import React from "react"

export default function Footer() {
    return (
        <footer className=" pt-10 pb-20 bg-black/50  rounded border-t-[1px] border-white/10 ">
            <div className="grid grid-flow-col gap-4">
                <a href="https://charactercalculator.com/tr/privacy/" className="link link-hover">Gizlilik Politikası</a>
                <a href="https://charactercalculator.com/tr/terms/" className="link link-hover">Kullanım Koşulları</a>
            </div>
            <div>
                <p>
                    <a className="link link-hover" href="https://charactercalculator.com/tr/">Character Calculator</a>
                </p>
            </div>
        </footer>

    )
}