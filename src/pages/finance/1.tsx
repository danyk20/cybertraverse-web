import React from 'react';
import {motion} from "framer-motion";
import {ArrowLeft, Home, Shield} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Cyber1 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#1A1F2C] text-white">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="container mx-auto px-4 py-8"
            >
                <div className="sticky top-5">
                    <div className="flex justify-between">
                        <button
                            onClick={() => navigate("/finance")}
                            className="flex text-primary hover:text-primary/80 transition-colors rounded-full backdrop-blur-lg"
                        >
                            <ArrowLeft className="mr-2"/> Back to Finance
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="flex text-primary hover:text-primary/80 transition-colors rounded-full backdrop-blur-lg"
                        >
                            <Home className="mr-2"/> Home
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <Shield className="w-16 h-16 text-primary"/>
                    </div>

                    <div className="prose prose-invert prose-green max-w-none">
                        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                            Start investing right now!
                        </h1>
                        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                            Step-by-Step guide for anyone without prior knowledge
                        </h2>

                        <div className="text-center text-primary mb-8">March 19, 2025</div>

                        <img
                            src="/investing.jpg"
                            alt="Secure Website Development"
                            className="w-full h-[700px] object-cover rounded-lg mb-8"
                        />

                        <p className="text-lg mb-6">
                            If you’ve ever thought about investing but felt intimidated—maybe you assumed it’s too
                            complicated or requires a fortune to start—let me tell you: that’s not true. Investing is
                            more accessible than you think, and understanding the basics can set you on the right path.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Why You Should Start Today?</h2>
                        <p className="text-lg mb-6">
                            When I first started learning about investing, two eye-opening realizations changed my
                            perspective:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>If you’re not investing, you’re losing money every day:</strong> Inflation,
                                driven by governments constantly printing new money, slowly erodes the value of your
                                savings. The only way to combat this is by investing.
                            </li>
                            <li><strong>Your money might already be invested—just not for your benefit:</strong> Banks
                                often use deposited funds for their own investments, earning interest while you get
                                little to nothing in return.
                            </li>
                        </ul>

                        <p className="text-lg mb-6">
                            To build wealth through investing, three key factors come into play:
                        </p>

                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>Time:</strong> The longer you invest, the more your money can grow.</li>
                            <li><strong>Money:</strong> Your initial investment amount.</li>
                            <li><strong>Interest:</strong> The annual return on your investment.</li>
                        </ul>

                        <p className="text-lg mb-6">
                            The power of compound interest means that your earnings generate even more earnings over
                            time. The earlier you start, the greater your potential gains.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Avoiding Scams and Extremely Risky
                            Investments</h2>

                        <p className="text-lg mb-6">
                            While investing is a powerful tool, it’s crucial to be cautious. The internet is full of
                            scams promising quick riches. A good rule of thumb: if it sounds too good to be true, it
                            probably is. No investment is 100% safe, and higher potential returns always come with
                            higher risks.
                        </p>

                        <div
                            className="mb-6 bg-[#282E3E] text-gray-300 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                            <strong>A special note on cryptocurrency:</strong> As a passionate believer in the
                            transformative potential of cryptocurrency, I see immense opportunities for innovation and
                            growth in this space. However, it’s important to approach it with caution and realism. While
                            some projects have strong fundamentals, many are speculative, fraudulent, or “<a
                            href="https://pump.fun"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer">pump and dump
                        </a>” schemes. Investing in crypto is similar to investing in startups: most may fail, but a few
                            could achieve extraordinary returns. That said, the odds of getting rich overnight are only
                            slightly better than winning the lottery. Thorough research, risk awareness, and disciplined
                            investing are essential, as the market is highly volatile. While the potential for
                            significant gains exists, it’s not a guaranteed path to wealth, and careful navigation is
                            key to unlocking its opportunities.

                        </div>

                        <p className="text-lg mb-6">
                            Investing isn’t about getting rich quickly—it’s about building long-term financial security.
                            So, let’s break it down step by step and get you started the right way!
                        </p>


                        <h2 className="text-2xl font-bold mb-4 text-primary">Exploring Traditional Investment
                            Types</h2>

                        <p className="text-lg mb-6">Now that we’ve covered why investing is essential, let’s dive into
                            the different ways you can invest your money. Many people associate investing only with
                            stocks, but there are several traditional options, each with its own risks and rewards. </p>


                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>Stocks:</strong> When you buy shares of a company, you become a partial owner,
                                granting you certain rights and privileges. Your returns primarily come from two
                                sources: price appreciation (when the stock value increases) and dividends (profits
                                shared with shareholders). Additionally, as a shareholder, you gain the ability to vote
                                on important company matters, such as electing the board of directors or approving major
                                corporate decisions. This voting power allows you to have a say in the company's
                                direction and governance. While stocks can offer high returns, they also come with
                                higher risk, making it important to carefully consider your investment decisions.
                            </li>
                            <li><strong>Bonds:</strong> Bonds are essentially loans that you provide to governments or
                                corporations in exchange for periodic interest payments and a return of the initial
                                amount at maturity. They are generally more predictable than stocks but usually offer
                                lower returns.
                            </li>
                            <li><strong>Mutual Funds:</strong> These are professionally managed investment funds that
                                pool money from multiple investors to invest in a diversified portfolio of stocks,
                                bonds, or other assets. While they help reduce risk, they often come with higher
                                management fees.
                            </li>
                            <li><strong>Exchange-Traded Funds (ETFs):</strong> ETFs function similarly to mutual funds
                                but trade like stocks on an exchange. They offer diversification with lower fees and are
                                a popular choice for long-term investors looking for a balance between risk and returns.
                            </li>
                            <li><strong>Real Estate Investment Trusts (REITs):</strong> REITs allow investors to earn
                                dividends from real estate without having to buy, manage, or finance properties
                                themselves. While they can be a stable investment, tax implications and fees should be
                                considered.
                            </li>
                            <li><strong>Certificates of Deposit (CDs):</strong> CDs are time deposits offered by banks
                                with fixed interest rates and maturity dates. While they provide a secure return, they
                                often fail to outpace inflation, making them less attractive for long-term wealth
                                growth but very safe.
                            </li>
                            <li><strong>Real Estate:</strong> Investing in physical properties (residential, commercial,
                                or land) can provide rental income and long-term appreciation. However, it requires
                                significant upfront capital, ongoing management, and is less liquid than other
                                investments. Mortgages can amplify returns but also increase risk by leveraging debt
                                against the investment. Some real estate investments also come with added benefits like
                                <a
                                    href="https://www.veranda.com/travel/g63312601/countries-will-give-you-citizenship-residency-for-buying-property/"
                                    className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"> residency or citizenship </a>
                                opportunities.
                            </li>
                            <li><strong>Commodities:</strong> Investing in commodities like gold, silver, oil, or
                                agricultural products allows you to hedge against inflation. While you may not
                                physically own the goods, you hold a financial claim to them. Commodity prices can be
                                volatile but may serve as a good diversification tool since there is low correlation
                                with traditional asset classes like stocks and bonds.
                            </li>
                            <li><strong>Private Equity:</strong> Private equity involves investing in startups or
                                private companies, often through venture capital or buyout funds. It can offer
                                significant returns but is highly risky and requires deep market domain knowledge.
                            </li>
                            <li><strong>Hedge Funds:</strong> These are pooled investment funds that use advanced
                                strategies like leverage and derivatives to generate returns. They are typically
                                accessible only to high-net-worth individuals (&gt; 100 000$) and come with high fees.
                            </li>
                            <li><strong>Art and Collectibles:</strong> Investing in rare art, vintage cars, wine, or
                                other collectibles can be lucrative, but it requires deep expertise due to the highly
                                specialized nature of these markets. One significant risk is the very low liquidity of
                                such assets, as finding a buyer can be challenging and time-consuming, potentially
                                forcing sellers to accept lower prices. Without proper knowledge, investors risk losing
                                large sums of money, as valuations are subjective and market demand can fluctuate
                                unpredictably.
                            </li>
                            <li><strong>Peer-to-Peer Lending:</strong> This involves lending money to individuals or
                                small businesses through online
                                <a
                                    href="https://www.zltymelon.sk/?lang=en_EN"
                                    className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"> platforms </a>
                                in exchange for interest payments. While it
                                can offer attractive returns, it requires active monitoring and carries risks of
                                defaults.
                            </li>
                            <li><strong>Options, Futures, and Derivatives (CFD):</strong> These financial instruments
                                derive their value from an underlying asset (e.g., stocks, commodities). While they can
                                provide high returns, they are
                                <a
                                    href="https://www.linkedin.com/pulse/55-83-retail-investors-cfds-loosing-money-disclosed-michael-gassner/"
                                    className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"> extremely risky</a>
                                , especially when traded with leverage, as
                                leverage amplifies both gains and losses. Additionally, these markets are often
                                dominated by high-frequency trading algorithms, which can make it challenging for
                                individual investors to compete.
                            </li>
                            <li><strong>Penny Stocks:</strong> These are low-priced stocks of struggling companies.
                                While they might seem like an opportunity for massive gains, they often carry extreme
                                risks, as many of these companies are on the verge of bankruptcy.
                            </li>
                            <li><strong>Forex Trading:</strong> Foreign exchange trading involves buying and selling
                                currencies. It is not ideal for long-term investments due to inflation but can be used
                                for short-term speculation.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Where Should You Invest?</h2>

                        <p className="text-lg mb-6">If you're new to investing, you might wonder, "Where can I even
                            start?" The answer depends on factors like your citizenship, tax residency, and income.
                            While traditional banks offer investment options, they often come with high fees, making
                            them an expensive choice. Instead, consider platforms like Revolut or Interactive Brokers,
                            both of which I’ve personally used. No matter which platform you choose, always research its
                            history, credibility, certifications, and user reviews to ensure it’s trustworthy. </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Revolut vs. Interactive Brokers</h2>

                        <p className="text-lg mb-6">These two platforms are on opposite ends of the spectrum, making
                            them great examples of what’s available: </p>

                        <table className="w-full border-collapse border border-gray-600 mb-4">
                            <thead>
                            <tr className="bg-green-500 text-white">
                                <th className="border border-gray-600 p-2"></th>
                                <th className="border border-gray-600 p-2"><strong>Revolut</strong></th>
                                <th className="border border-gray-600 p-2">Interactive Brokers</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-gray-600 p-2"><strong>Platform Type</strong></td>
                                <td className="border border-gray-600 p-2">A virtual bank with a simple,
                                    beginner-friendly interface.
                                </td>
                                <td className="border border-gray-600 p-2">A dedicated brokerage for experienced
                                    investors, offering advanced tools.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 p-2"><strong>Ease of Use</strong></td>
                                <td className="border border-gray-600 p-2">Intuitive and easy to navigate, ideal for
                                    beginners.
                                </td>
                                <td className="border border-gray-600 p-2">Complex interface, better suited for serious
                                    investors.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 p-2"><strong>Investment Options</strong></td>
                                <td className="border border-gray-600 p-2">Limited but growing, perfect for entry-level
                                    investors.
                                </td>
                                <td className="border border-gray-600 p-2">Extensive range of financial instruments for
                                    diverse types of investing.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 p-2"><strong>Fees</strong></td>
                                <td className="border border-gray-600 p-2">Offers free transactions depending on your
                                    subscription plan, great for casual investors.
                                </td>
                                <td className="border border-gray-600 p-2">Low fees overall, but the fee structure is
                                    more complicated.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 p-2"><strong>Performance</strong></td>
                                <td className="border border-gray-600 p-2">May delay trade execution, potentially
                                    missing opportunities.
                                </td>
                                <td className="border border-gray-600 p-2">Executes trades quickly and precisely, even
                                    at target prices.
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Which Should You Choose?</h2>

                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>For Beginners:</strong> Go with Revolut. It’s simple, affordable, and perfect
                                for getting started.
                            </li>
                            <li><strong>For Serious Investors:</strong> Choose Interactive Brokers. It offers more tools
                                and flexibility, though it requires a steeper learning curve.
                            </li>
                        </ul>

                        <div
                            className=" mb-6 bg-[#282E3E] text-gray-300 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                            <strong>Unlock Exclusive Benefits:</strong> Kickstart your investment journey with top-tier
                            platforms like <a
                            href="https://revolut.com/referral/?referral-code=daniel2p0!MAR1-25-VR-SK"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"> Revolut </a> and <a
                            href="https://ibkr.com/referral/daniel54354"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"> Interactive Brokers </a>
                            by using my referral link. Not only will you receive a valuable bonus to boost your
                            portfolio, but you'll also be supporting me in the process. Don’t miss out on this win-win
                            opportunity—start investing smarter today!

                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-primary">How to Purchase Your First Investment on
                            Interactive Brokers:</h2>

                        <p className="text-lg mb-6">Now that we’ve covered the basics, let’s dive into how to purchase
                            your very first asset. In this guide, I’ll walk you through the process step by step using
                            Interactive Brokers, a popular platform for investors. Before we begin, it’s important to
                            note that selecting the right investment is a topic in itself, and I’ll cover that in more
                            detail in a future post. For this example, I’ve chosen to focus on the S&P 500 index, which
                            is widely recomended as one of the most reliable long-term investments. By investing in an
                            S&P 500 index, you’re not betting on the success of a single company but rather on the
                            collective performance of the top 500 companies in the U.S. This index has a strong track
                            record, particularly over longer time horizons (10+ years). While there are many ETFs
                            (Exchange-Traded Funds) that track the S&P 500 index, I’ve selected one with the lowest fees
                            for this demonstration. However, I encourage you to conduct your own research and choose
                            investments that align with your goals and risk tolerance.</p>

                        <div
                            className="mb-6 bg-[#282E3E] text-gray-300 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                            <strong>Important Note on Currency Exchange:</strong> If you’re not using Revolut or
                            Interactive Brokers, be mindful of currency exchange fees, which can be costly. Often, it’s
                            more cost-effective to convert your money through a third-party service before transferring
                            it to your brokerage account. Many platforms hide conversion fees within the spread (the
                            difference between the buy and sell price) or charge explicit fees, so it’s worth comparing
                            options.

                        </div>

                        <ol className="list-decimal pl-6 mb-6 space-y-4">
                            <li><strong>Create an Account:</strong> Start by signing up for an Interactive Brokers
                                account. If you use a referral link, you may be eligible for a bonus of up to $1,000.
                                <img
                                    src="/Interactive_Brokers/create_account.png"
                                    alt="Creating account"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Log In and Access Your Dashboard:</strong> Once your account is set up, log in
                                and navigate to your dashboard.
                                <img
                                    src="/Interactive_Brokers/dashboard.png"
                                    alt="Initial dashboard"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Fund Your Account:</strong> Add funds to your account via bank transfer, which
                                is typically the most cost-effective method.

                                <ol className="list-decimal pl-6 mb-6 space-y-4">
                                    <li>Navigate to the "<strong>Transfer & Pay</strong>" section by selecting it from
                                        the
                                        top menu bar.
                                        <img
                                            src="/Interactive_Brokers/Fund/transfer.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>Choose "<strong>Transfer Funds</strong>" from the top-up menu options.
                                        <img
                                            src="/Interactive_Brokers/Fund/transfer_funds.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>Click on the "<strong>Deposit Funds</strong>" button in the newly displayed
                                        view.
                                        <img
                                            src="/Interactive_Brokers/Fund/deposit.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>Select "<strong>Use a new deposit method</strong>" to proceed with setting up
                                        your deposit.
                                        <img
                                            src="/Interactive_Brokers/Fund/new_deposit.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>Pick the currency you wish to deposit into your account.
                                        <img
                                            src="/Interactive_Brokers/Fund/deposit_currency.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>Scroll down and click "<strong>Get Instructions</strong>" under the Bank
                                        Transfer/SEPA option.
                                        <img
                                            src="/Interactive_Brokers/Fund/banktransfer.png"
                                            alt="Creating account"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li>
                                        Complete the required form and follow the provided instructions. While deposits
                                        are typically processed within minutes, processing times may vary depending on
                                        your bank and can take up to several days.
                                        <div
                                            className="mb-6 bg-[#282E3E] text-gray-300 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                                            <strong>Important Note:</strong> Always include the Payment Reference when
                                            making the transfer, as this is crucial for linking the payment to your
                                            account.
                                        </div>
                                    </li>
                                </ol>
                            </li>

                            <li><strong>Convert Currency:</strong> If you want to buy in a currency different from
                                your account’s one, use the currency conversion feature.
                                <ol className="list-decimal pl-6 mb-6 space-y-4">
                                    <li> Navigate to the <strong>Trade</strong> in the top menu bar.
                                        <img
                                            src="/Interactive_Brokers/trade.png"
                                            alt="Opening trade menu options"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li> If your account holds a different currency than the one required for your
                                        purchase, click the "<strong>Convert Currency</strong>” button.
                                        <img
                                            src="/Interactive_Brokers/convert_currency.png"
                                            alt="Searching for currency convertion tool"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li><strong>Select Currencies:</strong> Choose the currency you currently have
                                        and the currency you need for the transaction.
                                        <img
                                            src="/Interactive_Brokers/select_currency.png"
                                            alt="Selecting currency"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                    <li><strong>Enter the Amount to Convert:</strong> Input the amount you wish to
                                        convert. Keep in mind that Interactive Brokers charges a stable fee of 0.002%
                                        with a minimum of $2 for manual conversions. Alternatively, you can use the
                                        automatic conversion option, which costs 0.03% without minimum fee.
                                        <img
                                            src="/Interactive_Brokers/conversion_fee_6500.png"
                                            alt="Conversion fee"
                                            className="w-full h-[520px] object-cover rounded-lg mb-8"
                                        />
                                    </li>
                                </ol>
                            </li>

                            <li><strong>Search for Your Desired ETF:</strong> Use the search bar at the top of the
                                platform to enter the name or ticker symbol of the ETF you want to purchase (e.g., an
                                SPLG - S&P 500 ETF). Select the stock exchange (ARCA - US / MEXI - Mexico / LSE - UK)
                                where you want to execute the transaction.
                                <img
                                    src="/Interactive_Brokers/search_bar.png"
                                    alt="Searching finantial instrument"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Choose Between Stocks or Options:</strong> Select whether you want to buy shares
                                of the ETF or trade options (for this example, we’ll focus on buying shares/stocks).
                                <img
                                    src="/Interactive_Brokers/stock_option.png"
                                    alt="Selecting the righ finantial instrumet - stock over option"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Review Price History:</strong> Before proceeding, take a moment to review the
                                price history of the ETF to ensure you’re comfortable with its performance and click
                                "<strong>Buy</strong>" button on the right-hand menu, to initiate the purchase.
                                <img
                                    src="/Interactive_Brokers/price_history.png"
                                    alt="Price plot"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />

                            </li>
                            <li><strong>Select Quantity:</strong> Choose the number of shares you want to buy or the
                                total value of the transaction. You can also set additional parameters, such as a limit
                                price (the maximum price you’re willing to pay) and the duration for which your order
                                remains valid.
                                <img
                                    src="/Interactive_Brokers/stock_quantity.png"
                                    alt="Selection of desired quantity"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Review and Confirm:</strong> A pop-up window will appear with the terms and
                                conditions of the transaction. Review these carefully and confirm if you agree.
                                <img
                                    src="/Interactive_Brokers/terms.png"
                                    alt="Terms and conditions"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                            <li><strong>Receive Confirmation:</strong> Once your order is placed, you’ll receive a
                                confirmation. Congratulations—you’ve just made your first investment!
                                <img
                                    src="/Interactive_Brokers/confirmation.png"
                                    alt="Confirmation of transaction"
                                    className="w-full h-[550px] object-cover rounded-lg mb-8"
                                />
                            </li>
                        </ol>

                    </div>
                </div>

            </motion.div>
        </div>
    );

};

export default Cyber1;
