// Language switching functionality
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-downloads': 'Downloads',
        'nav-tutorials': 'Tutorials', 
        'nav-support': 'Support',
        
        // Hero section
        'hero-title': 'Break Free from Network Restrictions, Embrace Digital Freedom',
        'hero-subtitle': 'Powered by cutting-edge WireGuard® protocol, offering both "Shared Nodes" and "Dedicated Lines" to meet all your needs from daily browsing to professional applications.',
        'hero-cta': 'Start Free Trial',
        
        // Core advantages
        'advantage-speed-title': 'Ultimate Speed',
        'advantage-speed-desc': 'Lightweight WireGuard protocol ensures minimal performance loss and latency, delivering lightning-fast browsing, streaming, and downloading experience.',
        'advantage-security-title': 'Military-Grade Security',
        'advantage-security-desc': 'Advanced encryption technology and strict no-logs policy perfectly hide your digital footprint, ensuring absolute privacy and security.',
        'advantage-global-title': 'Global Coverage',
        'advantage-global-desc': 'We deploy numerous high-speed server nodes worldwide, allowing easy connection and global content unlocking wherever you are.',
        
        // Trial section
        'trial-title': 'Start Your One-Week Free Trial Now',
        'trial-subtitle': 'Experience our premium server nodes worldwide with no commitment and 30-day money-back guarantee.',
        'trial-choose': 'Choose any of the following shared node locations to start your trial:',
        'trial-cta': 'View Plan Details',
        
        // Regions
        'region-americas': '🌎 Americas',
        'region-asia': '🌏 Asia Pacific',
        'region-europe': '🌍 Europe', 
        'region-middle-africa': '🌍 Middle East & Africa',
        
        // Why choose us
        'why-title': 'Why Choose MyWireGuard?',
        'feature-speed-title': 'Ultra-Fast, One-Click Connection',
        'feature-speed-desc': 'Advanced WireGuard protocol for smooth live streaming, large file downloads, and online gaming. Simple operation with one-click connection.',
        'feature-encryption-title': 'Powerful Encryption Technology',
        'feature-encryption-desc': 'Industry-leading AES 256-bit encryption to hide your location and obfuscate network traffic, keeping your online activities private.',
        'feature-nolog-title': 'Strict No-Logs Policy',
        'feature-nolog-desc': 'We never record, share, or sell your data. Headquartered in Romania, where privacy laws provide strong protection.',
        'feature-dedicated-title': 'Dedicated Line Option',
        'feature-dedicated-desc': 'Need fixed IP and ultimate performance? Our dedicated line plans offer exclusive tunnels and IP addresses for remote work and professional applications.',
        'feature-hktw-title': 'Optimized for Hong Kong & Taiwan',
        'feature-hktw-desc': 'Understanding the unique network environment of Hong Kong and Taiwan users, we invest heavily in node selection and network optimization for the best localized experience.',
        'feature-support-title': '24/7 Customer Support',
        'feature-support-desc': 'Contact us anytime via live chat or email. We respond quickly and support multiple languages to solve your problems.',
        
        // Pricing
        'pricing-title': 'Choose the Plan That Suits You Best',
        'shared-title': 'Shared Nodes',
        'shared-desc': 'Most cost-effective choice for daily browsing, streaming entertainment, and personal privacy protection.',
        'shared-feature1': 'Connect to all our shared servers',
        'shared-feature2': 'Share IP addresses with other users',
        'shared-feature3': 'Ultimate anonymity',
        'shared-feature4': 'All core security features',
        'shared-price': '$2.99 USD/month',
        'shared-price-yearly': 'or $29.99 USD/year',
        'shared-cta': 'Choose Shared Plan',
        
        'dedicated-title': 'Dedicated Line',
        'dedicated-desc': 'Your personal VPN tunnel providing unmatched performance, stability, and fixed IP address.',
        'dedicated-badge': 'Professional Recommended',
        'dedicated-feature1': 'Your exclusive VPN tunnel',
        'dedicated-feature2': 'Fixed dedicated IP address',
        'dedicated-feature3': 'Avoid IP blocking from others\' actions',
        'dedicated-feature4': 'Best choice for remote work and access control systems',
        'dedicated-feature5': 'Highest stability and performance',
        'dedicated-price': '$9.99 USD/month',
        'dedicated-price-yearly': 'or $99.99 USD/year',
        'dedicated-cta': 'Upgrade to Dedicated Line',
        
        // Footer
        'footer-guarantee': 'We promise a 30-day worry-free money-back guarantee.',
        'footer-copyright': 'Copyright © 2025 MyWireGuard.com. All Rights Reserved.',
        'footer-contact': 'Contact',
        'footer-refund': 'Refund Policy',
        
        // Page titles
        'page-title': 'MyWireGuard - Shared Nodes & Dedicated Lines WireGuard VPN Service',
        'choose-plan': 'Choose Your Plan',
        
        // Contact page
        'contact-title': 'Contact Us - MyWireGuard',
        'contact-page-title': 'Contact Us',
        'contact-support-title': 'Technical Support & Account Inquiries',
        'contact-email-desc': 'We recommend contacting us via email so we can accurately track your issues.',
        'contact-email-prompt': 'Please send an email to:',
        'contact-chat-desc': 'You can also click the chat icon in the bottom right corner of the website to communicate with our customer service team in real time.',
        'contact-response-time': 'Our team provides 24/7 support and typically responds to your emails within 12 hours.',
        
        // Downloads page
        'downloads-title': 'Client Downloads - MyWireGuard',
        'downloads-page-title': 'Download WireGuard® Clients for All Your Devices',
        'windows-desc': 'Supports Windows 10 & 11 (x64).',
        'windows-download': 'Download .msi Installer',
        'macos-desc': 'Available from Mac App Store.',
        'macos-download': 'Go to App Store',
        'linux-desc': 'Supports major distributions, see tutorials.',
        'linux-download': 'View Installation Commands',
        'ios-desc': 'For iPhone and iPad.',
        'ios-download': 'Go to App Store',
        'android-desc': 'Available from Google Play.',
        'android-download': 'Go to Google Play',
        
        // Tutorials page
        'tutorials-title': 'Tutorials - MyWireGuard',
        'tutorials-page-title': 'MyWireGuard Setup Guide',
        'basic-setup-title': 'Basic Setup (Using Official Client)',
        'basic-setup-desc': 'This method is suitable for standard users who want all network traffic to go through VPN. Simple and straightforward operation.',
        'step1-title': 'Step 1: Get Configuration File',
        'step1-desc': 'Download the .conf configuration file for your desired node from your customer center.',
        'step2-title': 'Step 2: Import Configuration File',
        'step2-desc': 'Open the official client, select "Import tunnel(s) from file..." and choose your configuration file.',
        'step3-title': 'Step 3: Connect',
        'step3-desc': 'Click the switch next to the connection to enable it and enjoy secure, private web browsing!',
        'advanced-setup-title': 'Advanced Recommendation: Use TunnlTo for App Splitting (More Powerful)',
        'advanced-scenario': 'Recommended Scenario: Do you want to use local network for online gaming to get the lowest latency, while letting your browser go through VPN for security? TunnlTo is exactly the powerful tool you need!',
        'tunnlto-what-title': 'What is TunnlTo? Why do we recommend it?',
        'tunnlto-what-desc': 'TunnlTo is a third-party client based on WireGuard. Its core advantage is providing "App Splitting" functionality. This means you can precisely control which application\'s traffic goes through the VPN tunnel and which goes through your local regular network.',
        'tunnlto-step1-title': 'Step 1: Download TunnlTo',
        'tunnlto-step1-desc': 'TunnlTo is a free open-source software. Please download and install it from its official website.',
        'tunnlto-website': 'Go to Official Website',
        'tunnlto-step2-title': 'Step 2: Import Configuration File',
        'tunnlto-step2-desc': 'Open TunnlTo, click "Import tunnel(s) from file", and select your MyWireGuard .conf file.',
        'tunnlto-step3-title': 'Step 3: Configure Splitting',
        'tunnlto-step3-desc': 'Click connection settings, go to "App Routing" page, and select the applications you want to go through VPN (like Chrome).',
        'tunnlto-step4-title': 'Step 4: Connect and Enjoy',
        'tunnlto-step4-desc': 'Enable the connection! Now only your selected apps will go through VPN, while other programs remain unaffected, achieving perfect splitting.',
        'linux-setup-title': '(Server/Expert) Linux Installation & Configuration',
        'linux-setup-desc': 'For Debian/Ubuntu systems, you can use the following commands to install:',
        'linux-copy-desc': 'After installation, copy your .conf configuration file to the /etc/wireguard/ directory (for example, name it mywg0.conf).',
        'linux-start-desc': 'Use the following command to start the connection:',
        'linux-stop-desc': 'To disconnect, use:',
        
        // Support page
        'support-title': 'Customer Support & FAQ - MyWireGuard',
        'support-page-title': 'Customer Support & FAQ',
        'support-intro': 'Having trouble? Don\'t worry, we\'re here to help. Most common issues can be resolved with the solutions below. If the problem persists, our customer service team is always ready to assist you.',
        'connection-performance-title': 'Connection & Performance',
        'no-internet-question': 'No internet access after connecting, what should I do?',
        'no-internet-answer-intro': 'This is usually a DNS resolution issue, which is the most common situation. Please try the following steps:',
        'no-internet-step1': 'Edit configuration file: Open WireGuard client, select your connection and click "Edit".',
        'no-internet-step2': 'Modify DNS: Find the DNS line under the [Interface] section.',
        'no-internet-step3': 'Change to public DNS: Modify its value to 1.1.1.1, 8.8.8.8 or 8.8.4.4, 1.0.0.1.',
        'no-internet-step4': 'Save and reconnect: Save your changes, then disconnect and reconnect the VPN.',
        'handshake-fail-question': 'Cannot connect after clicking "Activate" (handshake failure)?',
        'handshake-fail-answer-intro': 'Handshake failure usually means your device cannot establish initial connection with our servers. Possible reasons:',
        'handshake-fail-firewall': 'Network firewall: Your network (e.g., company, school, or public WiFi) may have firewalls blocking UDP ports used by WireGuard. Try switching to a different network (e.g., mobile hotspot) for testing.',
        'handshake-fail-config': 'Configuration file issue: Please ensure you\'re using the latest configuration file downloaded from our customer center, without manually modifying keys (PublicKey) or endpoint addresses.',
        'slow-speed-question': 'Speed becomes slower after connecting VPN, how to improve?',
        'slow-speed-answer-intro': 'VPN speed is affected by multiple factors, but you can try the following methods to optimize:',
        'slow-speed-nearby': 'Choose nearby nodes: Physical distance is the biggest factor affecting speed. Please try to select server nodes geographically closest to you.',
        'slow-speed-dedicated': 'Consider dedicated lines: If you need ultimate performance and stability without being affected by other users, we strongly recommend upgrading to our "Dedicated Line" plan.',
        'slow-speed-splitting': 'Try splitting tools: Refer to the TunnlTo tool recommended on our tutorials page, letting other programs use local network without interference.',
        'account-plans-title': 'Account & Plans',
        'shared-vs-dedicated-question': 'What\'s the difference between shared nodes and dedicated lines?',
        'shared-vs-dedicated-answer-intro': 'These are our two core plans to meet different user needs:',
        'shared-vs-dedicated-shared': 'Shared Nodes: You will share server resources and IP addresses with other users. This is the most cost-effective choice, perfect for daily anonymous browsing, securing public WiFi, and accessing general websites.',
        'shared-vs-dedicated-dedicated': 'Dedicated Lines: You will get a VPN tunnel completely reserved for you personally and a **fixed dedicated IP address**. This means:',
        'shared-vs-dedicated-stable': 'More stable performance: Bandwidth is exclusively for you, unaffected by others\' activities.',
        'shared-vs-dedicated-clean': 'Higher IP purity: Eliminates the risk of shared IP being restricted or blocked by certain websites (like online banking).',
        'shared-vs-dedicated-professional': 'Professional use preferred: Perfect for users who need fixed IP for remote work, accessing company internal systems, or conducting secure online transactions.',
        'multi-device-question': 'How many devices can use one configuration file (account)?',
        'multi-device-answer1': 'You can install the same configuration file on all your devices (computer, phone, tablet).',
        'multi-device-answer2': 'But for optimal connection stability and performance, we recommend **using the same configuration file on only one device at a time**.',
        'no-logs-question': 'Do you log my online activities (no-logs policy)?',
        'no-logs-answer': 'We strictly adhere to a no-logs policy. We never record, monitor, or store any of your network traffic, browsing history, DNS queries, or IP addresses. Your online activities are completely yours, and we are committed to protecting your absolute privacy.',
        'support-cta-title': 'Still need help?',
        'support-cta-desc': 'If the above answers don\'t resolve your issue, please don\'t hesitate!<br>Our customer service team is always ready to provide one-on-one support.',
        'support-cta-button': 'Contact Our Support Team',
        
        // Refund page
        'refund-title': 'Refund Policy - MyWireGuard',
        'refund-page-title': '30-Day Money-Back Guarantee',
        'refund-intro': 'We are confident in the quality of MyWireGuard\'s service. If you are not 100% satisfied with our service within the first 30 days after purchase, we will provide you with a worry-free full refund.',
        'refund-eligibility-title': 'Refund Eligibility',
        'refund-eligibility-1': 'Your refund request must be submitted within 30 calendar days of your first purchase of the service.',
        'refund-eligibility-2': 'This policy applies to our monthly and annual plans.',
        'refund-eligibility-3': 'If you have violated our terms of service, you may not be eligible for a refund.',
        'refund-how-title': 'How to Request a Refund',
        'refund-how-1': 'Please send an email to support@mywireguard.com from your registered email address.',
        'refund-how-2': 'Please note "Refund Request" in the email subject.',
        'refund-how-3': 'In the email content, please provide your registered account or order number so we can verify your identity.',
        'refund-how-4': 'If you\'re willing, we would greatly appreciate if you could provide the reason for the refund, which will help us improve our service.',
        'refund-processing-title': 'Refund Processing',
        'refund-processing-1': 'After receiving your refund request, we will review and process it within 48 hours. The refund will be returned through your original payment channel.',
        'refund-processing-2': 'Depending on different payment methods, it may take 5-10 business days for the funds to arrive in your account.',
        'refund-processing-3': 'If you have any questions, please feel free to contact our customer service team.',
        
        // Pricing page
        'pricing-title': 'Choose Your Plan - MyWireGuard',
        'pricing-hero-title': 'Choose Your Perfect VPN Plan',
        'pricing-hero-subtitle': 'Secure your digital life with our premium WireGuard VPN service. Choose between shared nodes for maximum privacy or dedicated lines for ultimate performance.',
        'billing-monthly': 'Monthly',
        'billing-yearly': 'Yearly (Save 17%)',
        'shared-plan-name': 'Shared Nodes',
        'shared-plan-desc': 'Perfect for daily browsing and streaming',
        'shared-plan-period': 'Billed monthly',
        'shared-feature-1': 'Access to all shared servers',
        'shared-feature-2': 'Unlimited bandwidth',
        'shared-feature-3': 'Military-grade encryption',
        'shared-feature-4': 'No-logs policy',
        'shared-feature-5': '24/7 customer support',
        'dedicated-plan-name': 'Dedicated Line',
        'dedicated-plan-desc': 'Ultimate performance with fixed IP',
        'dedicated-plan-period': 'Billed monthly',
        'dedicated-feature-1': 'Your exclusive VPN tunnel',
        'dedicated-feature-2': 'Fixed dedicated IP address',
        'dedicated-feature-3': 'Maximum performance & stability',
        'dedicated-feature-4': 'Perfect for remote work',
        'dedicated-feature-5': 'Priority customer support',
        'popular-badge': 'Most Popular',
        'checkout-title': 'Secure Checkout',
        'pay-with-paypal': 'Pay with PayPal',
        'summary-plan': 'Plan:',
        'summary-billing': 'Billing:',
        'summary-total': 'Total:',
        'billing-monthly-text': 'Monthly',
        'guarantee-title': '30-Day Money-Back Guarantee',
        'guarantee-text': 'Try risk-free. If you\'re not satisfied, get a full refund within 30 days.',
        
        // Checkout page
        'step-plan': 'Plan Selection',
        'step-payment': 'Payment', 
        'step-confirmation': 'Confirmation',
        'order-summary': 'Order Summary',
        'monthly-premium': 'Monthly Premium:',
        'your-price': 'Your Price:',
        'launch-special': '40% OFF LAUNCH SPECIAL',
        'plan-features': 'Plan Features:',
        'feature-servers': 'Access to all shared servers',
        'feature-bandwidth': 'Unlimited bandwidth',
        'feature-encryption': 'Military-grade encryption',
        'feature-nologs': 'No-logs policy',
        'feature-support': '24/7 customer support',
        'base-plan': 'Base Plan:',
        'billing-frequency': 'Billing Frequency:',
        'monthly': 'Monthly',
        'setup-fee': 'Setup Fee:',
        'free': 'FREE',
        'total-due': 'Total Due Today:',
        'coverage-info': 'Service begins immediately after payment',
        'secure-payment': 'Secure Payment',
        'ssl-encrypted': 'SSL Encrypted',
        'secure-checkout': 'Secure Checkout',
        'privacy-protected': 'Privacy Protected',
        'contact-info': 'Contact Information',
        'first-name': 'First Name *',
        'last-name': 'Last Name *',
        'email-address': 'Email Address *',
        'phone-number': 'Phone Number',
        'billing-frequency-title': 'Billing Frequency',
        'monthly-billing': 'Monthly Billing',
        'pay-monthly': 'Pay month-to-month',
        'yearly-billing': 'Yearly Billing',
        'save-badge': 'Save 17%!',
        'pay-yearly': 'Pay for 10 months only',
        'payment-method': 'Payment Method',
        'paypal-payment': 'PayPal Payment',
        'paypal-redirect': 'You will be redirected to PayPal to complete your payment securely.',
        'agree-terms': 'I agree to the Terms of Service and authorize MyWireGuard to charge my payment method. *',
        'guarantee-desc': 'Not satisfied? Get a full refund within 30 days, no questions asked.',
        'back-home': 'Back to Home',
        'view-support': 'View Support'
    },
    'zh-hant': {
        // Navigation
        'nav-home': '首頁',
        'nav-downloads': '客戶端下載',
        'nav-tutorials': '使用教程',
        'nav-support': '客戶查詢',
        
        // Hero section
        'hero-title': '告別網絡限制，擁抱數碼自由',
        'hero-subtitle': '採用頂尖 WireGuard® 協議，提供「共享節點」與「獨享專線」兩種方案，滿足您從日常瀏覽到專業應用的所有需求。',
        'hero-cta': '立即開始試用',
        
        // Core advantages
        'advantage-speed-title': '極致速度',
        'advantage-speed-desc': '輕量級的 WireGuard 協議確保了最低的性能損耗和延遲，為您帶來閃電般的瀏覽、串流和下載體驗。',
        'advantage-security-title': '軍規安全',
        'advantage-security-desc': '採用最先進的加密技術和嚴格的無日誌政策，您的數碼足跡將被完美隱藏，確保絕對的私隱與安全。',
        'advantage-global-title': '全球覆蓋',
        'advantage-global-desc': '我們在全球部署了大量高速伺服器節點，無論您身在何處，都能輕鬆連接，解鎖全球內容。',
        
        // Trial section
        'trial-title': '立即開始您的一週免費試用',
        'trial-subtitle': '體驗我們遍佈全球的頂級伺服器節點，無任何承諾，隨時可享 30 天退款保證。',
        'trial-choose': '您可以選擇以下任一共享節點地點開始試用：',
        'trial-cta': '查看方案詳情',
        
        // Regions
        'region-americas': '🌎 美洲',
        'region-asia': '🌏 亞太地區',
        'region-europe': '🌍 歐洲',
        'region-middle-africa': '🌍 中東與非洲',
        
        // Why choose us
        'why-title': '為何選擇 MyWireGuard？',
        'feature-speed-title': '速度超快，一鍵連接',
        'feature-speed-desc': '採用先進的WireGuard協議，暢享賽事直播、下載大檔案、打線上遊戲。操作簡便，一鍵即可連接。',
        'feature-encryption-title': '強大的加密技術',
        'feature-encryption-desc': '運用業界領先的 AES 256 位元加密技術來隱藏您的位置並混淆您的網絡流量。讓您的網絡活動免受任何人監視。',
        'feature-nolog-title': '嚴格的無日誌政策',
        'feature-nolog-desc': '我們絕不記錄、分享或出售您的數據。我們的總部設在羅馬ニ亞，該國的私隱法為您提供強而有力的保護。',
        'feature-dedicated-title': '獨享專線選項',
        'feature-dedicated-desc': '需要固定 IP 和極致性能？我們提供獨享專線方案，隧道和 IP 地址僅供您一人使用，是遠程辦公和專業應用的最佳選擇。',
        'feature-hktw-title': '專屬優化，直連港台',
        'feature-hktw-desc': '我們深知香港、台灣用戶的特殊網絡環境，因此在節點選擇和網絡優化上投入大量精力，確保您獲得最佳的本地化體驗。',
        'feature-support-title': '24/7 全天候客戶支援',
        'feature-support-desc': '隨時透過即時聊天或電子郵件聯繫我們。我們響應迅速，並支援多種語言，隨時為您解決問題。',
        
        // Pricing
        'pricing-title': '選擇最適合您的方案',
        'shared-title': '共享節點',
        'shared-desc': '最具性價比的選擇，適合日常瀏覽、串流娛樂和保障個人私隱。',
        'shared-feature1': '連接我們所有的共享伺服器',
        'shared-feature2': '與其他用戶共享 IP 地址',
        'shared-feature3': '極致的匿名性',
        'shared-feature4': '所有核心安全功能',
        'shared-price': '$2.99 美元/月',
        'shared-price-yearly': '或 $29.99 美元/年',
        'shared-cta': '選擇共享方案',
        
        'dedicated-title': '獨享專線',
        'dedicated-desc': '為您個人專屬的 VPN 隧道，提供無與倫比的性能、穩定性和固定的 IP 地址。',
        'dedicated-badge': '專業推薦',
        'dedicated-feature1': '您專屬的 VPN 隧道',
        'dedicated-feature2': '固定的獨享 IP 地址',
        'dedicated-feature3': '杜絕因他人行為導致 IP 被封鎖',
        'dedicated-feature4': '遠程辦公、訪問權限系統的最佳選擇',
        'dedicated-feature5': '最高的穩定性和性能',
        'dedicated-price': '$9.99 美元/月',
        'dedicated-price-yearly': '或 $99.99 美元/年',
        'dedicated-cta': '升級至獨享專線',
        
        // Footer
        'footer-guarantee': '我們承諾 30 天無憂退款保證。',
        'footer-copyright': 'Copyright © 2025 MyWireGuard.com. All Rights Reserved.',
        'footer-contact': '聯絡方式',
        'footer-refund': '退款政策',
        
        // Page titles
        'page-title': 'MyWireGuard - 共享節點與獨享專線 WireGuard VPN 服務',
        'choose-plan': '選擇您的方案',
        
        // Contact page
        'contact-title': '聯絡方式 - MyWireGuard',
        'contact-page-title': '聯絡我們',
        'contact-support-title': '技術支援與帳務查詢',
        'contact-email-desc': '我們推薦您使用電子郵件與我們聯繫，以便我們能準確追蹤您的問題。',
        'contact-email-prompt': '請發送郵件至：',
        'contact-chat-desc': '您也可以點擊網站右下角的聊天圖標，與我們的客服團隊進行即時溝通。',
        'contact-response-time': '我們的團隊提供 24/7 全天候支援，通常會在 12 小時內回覆您的郵件。',
        
        // Downloads page
        'downloads-title': '客戶端下載 - MyWireGuard',
        'downloads-page-title': '為您的所有設備下載 WireGuard® 客戶端',
        'windows-desc': '支援 Windows 10 & 11 (x64)。',
        'windows-download': '下載 .msi 安裝檔',
        'macos-desc': '可從 Mac App Store 下載。',
        'macos-download': '前往 App Store',
        'linux-desc': '支援各大發行版，請參考教程。',
        'linux-download': '查看安裝指令',
        'ios-desc': '適用於 iPhone 和 iPad。',
        'ios-download': '前往 App Store',
        'android-desc': '可從 Google Play 下載。',
        'android-download': '前往 Google Play',
        
        // Tutorials page
        'tutorials-title': '使用教程 - MyWireGuard',
        'tutorials-page-title': 'MyWireGuard 設定指南',
        'basic-setup-title': '基礎設定 (使用官方客戶端)',
        'basic-setup-desc': '此方法適用於希望將所有網絡流量通過 VPN 的標準用戶。操作簡單直接。',
        'step1-title': '第一步：獲取設定檔',
        'step1-desc': '從您的客戶中心下載所需節點的 .conf 設定檔。',
        'step2-title': '第二步：匯入設定檔',
        'step2-desc': '打開官方客戶端，選擇「從檔案匯入隧道...」並選取您的設定檔。',
        'step3-title': '第三步：連接',
        'step3-desc': '點擊連線旁的開關即可啟用，享受安全、私密的網絡瀏覽！',
        'advanced-setup-title': '進階推薦：使用 TunnlTo 實現應用程式分流 (更強大)',
        'advanced-scenario': '場景推薦：您是否希望在玩線上遊戲時使用本地網絡以獲得最低延遲，同時讓您的瀏覽器通過 VPN 保障安全？TunnlTo 正是您需要的強大工具！',
        'tunnlto-what-title': '什麼是 TunnlTo？為何推薦它？',
        'tunnlto-what-desc': 'TunnlTo 是一款基於 WireGuard 的第三方客戶端，它最核心的優勢就是提供了「應用程式分流」功能。這意味著您可以精準控制哪一個應用程式的流量走 VPN 通道，哪一個走您本地的常規網絡。',
        'tunnlto-step1-title': '第一步：下載 TunnlTo',
        'tunnlto-step1-desc': 'TunnlTo 是一款免費的開源軟件。請從其官網下載並安裝。',
        'tunnlto-website': '前往官網',
        'tunnlto-step2-title': '第二步：匯入設定檔',
        'tunnlto-step2-desc': '打開 TunnlTo，點擊「Import tunnel(s) from file」，選擇您的 MyWireGuard .conf 檔案。',
        'tunnlto-step3-title': '第三步：設定分流',
        'tunnlto-step3-desc': '點擊連線設定，進入 "App Routing" 頁面，選擇您希望走 VPN 的應用程式 (如 Chrome)。',
        'tunnlto-step4-title': '第四步：連接並享受',
        'tunnlto-step4-desc': '啟用連線！現在只有您選中的 App 會通過 VPN，其他程式則不受影響，實現完美分流。',
        'linux-setup-title': '(伺服器/專家) Linux 安裝與設定',
        'linux-setup-desc': '對於 Debian/Ubuntu 系統，您可以使用以下指令安裝：',
        'linux-copy-desc': '安裝完成後，將您的 .conf 設定檔複製到 /etc/wireguard/ 目錄下 (例如，命名為 mywg0.conf)。',
        'linux-start-desc': '使用以下指令來啟動連接：',
        'linux-stop-desc': '若要斷開連接，請使用：',
        
        // Support page
        'support-title': '客戶查詢與常見問題 - MyWireGuard',
        'support-page-title': '客戶查詢與常見問題 (FAQ)',
        'support-intro': '遇到問題了嗎？別擔心，我們在這裏為您解答。大多數常見問題都能在這裡找到解決方案。如果問題依然存在，我們的客服團隊隨時準備為您提供幫助。',
        'connection-performance-title': '連接與性能',
        'no-internet-question': '連接後沒有網絡，無法上網怎麼辦？',
        'no-internet-answer-intro': '這通常是 DNS 解析問題，是最常見的情況。請嘗試以下步驟：',
        'no-internet-step1': '編輯設定檔：打開 WireGuard 客戶端，選擇您的連線並點擊「編輯」。',
        'no-internet-step2': '修改 DNS：找到 [Interface] 區塊下的 DNS 這一行。',
        'no-internet-step3': '更換為公共 DNS：將其值修改為 1.1.1.1, 8.8.8.8 或 8.8.4.4, 1.0.0.1。',
        'no-internet-step4': '儲存並重連：儲存您的修改，然後斷開並重新連接 VPN。',
        'handshake-fail-question': '點擊「啟用」後無法成功連接 (無法完成握手)？',
        'handshake-fail-answer-intro': '無法完成握手 (Handshake) 通常意味著您的設備無法與我們的伺服器建立初始連接。原因可能如下：',
        'handshake-fail-firewall': '網絡防火牆：您所在的網絡（例如公司、學校或公共 WiFi）可能有防火牆阻止了 WireGuard 使用的 UDP 端口。請嘗試切換到不同的網絡（例如手機熱點）進行測試。',
        'handshake-fail-config': '設定檔問題：請確保您使用的是從我們客戶中心下載的最新設定檔，沒有手動修改過金鑰 (PublicKey) 或端點 (Endpoint) 地址。',
        'slow-speed-question': '連接 VPN 後速度變慢了，如何改善？',
        'slow-speed-answer-intro': 'VPN 速度受多種因素影響，但您可以嘗試以下方法來優化：',
        'slow-speed-nearby': '選擇就近節點：物理距離是影響速度的最大因素。請盡量選擇地理位置離您最近的伺服器節點。',
        'slow-speed-dedicated': '考慮獨享專線：如果您需要極致的性能和穩定性，不受其他用戶影響，強烈建議您升級到我們的「獨享專線」方案。',
        'slow-speed-splitting': '嘗試分流工具：參考我們教程頁面推薦的 TunnlTo 工具，讓其他程式走本地網絡，互不影響。',
        'account-plans-title': '帳戶與方案',
        'shared-vs-dedicated-question': '共享節點和獨享專線有什麼區別？',
        'shared-vs-dedicated-answer-intro': '這是我們提供的兩種核心方案，以滿足不同用戶的需求：',
        'shared-vs-dedicated-shared': '共享節點 (Shared)：您將與其他用戶共享伺服器的資源和 IP 地址。這是最具性價比的選擇，非常適合日常的匿名瀏覽、保障公共 WiFi 安全和訪問一般網站。',
        'shared-vs-dedicated-dedicated': '獨享專線 (Dedicated)：您將獲得一個完全為您個人保留的 VPN 隧道和一個**固定的獨享 IP 地址**。這意味著：',
        'shared-vs-dedicated-stable': '性能更穩定：頻寬僅供您一人使用，不受他人活動影響。',
        'shared-vs-dedicated-clean': 'IP 純淨度高：杜絕了因共享 IP 被某些網站（如網上銀行）限制或封鎖的風險。',
        'shared-vs-dedicated-professional': '專業用途首選：非常適合需要固定 IP 進行遠程辦公、訪問公司內部系統或進行安全線上交易的用戶。',
        'multi-device-question': '一個設定檔 (帳號) 可以在多少台設備上使用？',
        'multi-device-answer1': '您可以在您的所有設備上（電腦、手機、平板）安裝同一個設定檔。',
        'multi-device-answer2': '但為了保證最佳的連接穩定性和性能，我們建議**同一個設定檔在同一時間只在一台設備上啟用連接**。',
        'no-logs-question': '你們是否會記錄我的上網活動 (無日誌政策)？',
        'no-logs-answer': '我們嚴格遵守無日誌政策。我們絕不會記錄、監控或儲存您的任何網絡流量、瀏覽歷史、DNS 查詢或 IP 地址。您的線上活動完全屬於您自己，我們致力於保護您的絕對私隱。',
        'support-cta-title': '仍然需要幫助？',
        'support-cta-desc': '如果以上解答未能解決您的問題，請不要猶豫！<br>我們的客服團隊隨時準備為您提供一對一的支援。',
        'support-cta-button': '聯絡我們的支援團隊',
        
        // Refund page
        'refund-title': '退款政策 - MyWireGuard',
        'refund-page-title': '30 天退款保證',
        'refund-intro': '我們對 MyWireGuard 的服務品質充滿信心。如果您在購買後的前 30 天內對我們的服務不是 100% 滿意，我們將為您提供無憂全額退款。',
        'refund-eligibility-title': '退款資格',
        'refund-eligibility-1': '您的退款請求必須在您首次購買服務後的 30 個日曆日內提交。',
        'refund-eligibility-2': '本政策適用於我們的月付和年付方案。',
        'refund-eligibility-3': '如果您違反了我們的服務條款，則可能不具備退款資格。',
        'refund-how-title': '如何申請退款',
        'refund-how-1': '請透過您的註冊郵箱，發送一封電子郵件至 support@mywireguard.com。',
        'refund-how-2': '郵件標題請註明：「退款申請」。',
        'refund-how-3': '在郵件內容中，請提供您的註冊帳號或訂單號碼，以便我們核實您的身份。',
        'refund-how-4': '如果您願意，我們非常感謝您能提供退款的原因，這將有助於我們改進服務。',
        'refund-processing-title': '退款處理',
        'refund-processing-1': '在收到您的退款請求後，我們將��� 48 小時內進行審核並處理。退款將通過您原始的支付渠道原路退回。',
        'refund-processing-2': '根據不同的支付方式，款項到賬可能需要 5-10 個工作日。',
        'refund-processing-3': '如果您有任何疑問，請隨時與我們的客服團隊聯繫。',
        
        // Pricing page
        'pricing-title': '選擇您的方案 - MyWireGuard',
        'pricing-hero-title': '選擇最適合您的 VPN 方案',
        'pricing-hero-subtitle': '使用我們的頂級 WireGuard VPN 服務保護您的數位生活。選擇共享節點獲得最大私隱保護，或選擇獨享專線獲得極致性能。',
        'billing-monthly': '月付',
        'billing-yearly': '年付 (省 17%)',
        'shared-plan-name': '共享節點',
        'shared-plan-desc': '日常瀏覽和串流的完美選擇',
        'shared-plan-period': '按月計費',
        'shared-feature-1': '連接所有共享伺服器',
        'shared-feature-2': '無限頻寬',
        'shared-feature-3': '軍規級加密',
        'shared-feature-4': '無日誌政策',
        'shared-feature-5': '24/7 客戶支援',
        'dedicated-plan-name': '獨享專線',
        'dedicated-plan-desc': '固定 IP 的極致性能',
        'dedicated-plan-period': '按月計費',
        'dedicated-feature-1': '您專屬的 VPN 隧道',
        'dedicated-feature-2': '固定的獨享 IP 地址',
        'dedicated-feature-3': '最高性能與穩定性',
        'dedicated-feature-4': '遠程辦公的完美選擇',
        'dedicated-feature-5': '優先客戶支援',
        'popular-badge': '最受歡迎',
        'checkout-title': '安全結帳',
        'pay-with-paypal': '使用 PayPal 付款',
        'summary-plan': '方案：',
        'summary-billing': '計費：',
        'summary-total': '總計：',
        'billing-monthly-text': '月付',
        'guarantee-title': '30 天退款保證',
        'guarantee-text': '無風險試用。如果您不滿意，可在 30 天內獲得全額退款。',
        
        // Checkout page
        'step-plan': '方案選擇',
        'step-payment': '付款',
        'step-confirmation': '確認',
        'order-summary': '訂單摘要',
        'monthly-premium': '月費：',
        'your-price': '您的價格：',
        'launch-special': '上市特價 40% 折扣',
        'plan-features': '方案功能：',
        'feature-servers': '連接所有共享伺服器',
        'feature-bandwidth': '無限頻寬',
        'feature-encryption': '軍規級加密',
        'feature-nologs': '無日誌政策',
        'feature-support': '24/7 客戶支援',
        'base-plan': '基本方案：',
        'billing-frequency': '計費頻率：',
        'monthly': '月付',
        'setup-fee': '設置費：',
        'free': '免費',
        'total-due': '今日應付總額：',
        'coverage-info': '付款後立即開始服務',
        'secure-payment': '安全付款',
        'ssl-encrypted': 'SSL 加密',
        'secure-checkout': '安全結帳',
        'privacy-protected': '隱私保護',
        'contact-info': '聯繫資訊',
        'first-name': '名字 *',
        'last-name': '姓氏 *',
        'email-address': '電子郵件 *',
        'phone-number': '電話號碼',
        'billing-frequency-title': '計費頻率',
        'monthly-billing': '月付計費',
        'pay-monthly': '按月付款',
        'yearly-billing': '年付計費',
        'save-badge': '省 17%！',
        'pay-yearly': '僅付 10 個月',
        'payment-method': '付款方式',
        'paypal-payment': 'PayPal 付款',
        'paypal-redirect': '您將被重定向到 PayPal 以安全完成付款。',
        'agree-terms': '我同意服務條款並授權 MyWireGuard 向我的付款方式收費。*',
        'guarantee-desc': '不滿意？30 天內獲得全額退款，無需問理由。',
        'back-home': '返回首頁',
        'view-support': '查看支援'
    }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language and save to localStorage
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageContent(lang);
    updateLanguageSelector(lang);
}

// Update page content based on selected language
function updatePageContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh-hant' ? 'zh-Hant' : 'en';
    
    // Update page title
    const titleElement = document.querySelector('title');
    const titleKey = titleElement.getAttribute('data-i18n');
    if (titleKey && translations[lang] && translations[lang][titleKey]) {
        document.title = translations[lang][titleKey];
    }
}

// Update language selector appearance
function updateLanguageSelector(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    updatePageContent(currentLang);
    updateLanguageSelector(currentLang);
    
    // Add click handlers to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});