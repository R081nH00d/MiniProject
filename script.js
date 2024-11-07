// Function to load the TradingView chart
function loadTradingView() {
    var platform = document.getElementById("platform").value;
    var tradingViewSymbol = getTradingViewSymbolForPlatform(platform);

    if (tradingViewSymbol) {
        new TradingView.widget({
            "container_id": "trading-view",
            "symbol": tradingViewSymbol,
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "details": true,
            "hideideas": true
        });
    } else {
        alert("Invalid platform selection!");
    }
}

// Function to get the TradingView symbol based on platform
function getTradingViewSymbolForPlatform(platform) {
    switch (platform) {
        case "crypto":
            return "BITFINEX:BTCUSD"; // Example symbol for Bitcoin
        case "forex":
            return "OANDA:EURUSD"; // Example symbol for EUR/USD
        case "options":
            return "CBOE:SPX"; // Example symbol for S&P 500 Index Options
        case "indian-stock":
            return "NSE:NIFTY"; // Example symbol for NSE Nifty Index
        default:
            return "";
    }
}
