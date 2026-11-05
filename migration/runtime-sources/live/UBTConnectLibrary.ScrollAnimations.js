let ScrollEvent = {
    getVariables: function (){
        return {
            scrollContainerClass: '.active-screen.screen-container:has(.layout)',
            header: 'header',
            headerTop: '.header-top-content',
            headerTopSearch: '.header-top-search',
            headerSizeVar: '--header-size',
            statusBarVar: '--status-bar-height',
            searchInputClass: '.ubt-home-page-search',
            headerVisibilityVar: '--header-shadow-scroll',
            footerVisibilityVar: '--footer-shadow-scroll',
            svgBackgroundClass: '.ubt-svg-container',
            svgWrapperClass: '.svg-wrapper',
            svgPath: 'svg path',
            svgWidth: 360,
            svgHeight: 248,
            svgBreakPoint: 214,
            svgCurvePoint: 282
        };
    },
    getRegex: function (){
        return new RegExp('[0-9]+','g');
    },
    parseHeight: function (heightInPx){
        if(!heightInPx){
            return 0;
        }
        return (heightInPx.match(this.getRegex()) || []).reduce((accumulator, currentValue) => {
            return accumulator + parseInt(currentValue, 10);
        }, 0);
    },
    getStatusBarSize: function (){
        let statusBarInPx = window.getComputedStyle(document.body).getPropertyValue(this.getVariables().statusBarVar);
        const statusBarHeight = this.parseHeight(statusBarInPx);
        return statusBarHeight;
    },
    getHeaderSize: function (header){
        let headerHeightInPx = window.getComputedStyle(header).getPropertyValue(this.getVariables().headerSizeVar);
        const headerHeight = this.parseHeight(headerHeightInPx);
        return headerHeight;
    },
    getSvgHeight: function (currentSvgHeight){
        const svgHeightVars = this.getVariables();
        if(!currentSvgHeight || isNaN(svgHeightVars.svgHeight) || isNaN(svgHeightVars.svgBreakPoint)){
            return currentSvgHeight;
        }else{
            return (currentSvgHeight * svgHeightVars.svgBreakPoint) / svgHeightVars.svgHeight;
        }
    },
    svgExists: false,
    svgIsScrolled: false,
    svgIsReset: true,
    resetSvgVars: function (){
        if(this.svgIsReset){
            this.svgExists = false;
            this.svgIsScrolled = false;
        }else{
            this.svgIsReset = true;
        }
    },
    setScrollShadow: function (scrollContent, shadowVariable, isVisible){
        if(scrollContent){
            isVisible ? scrollContent.style.setProperty(shadowVariable,'visible') : scrollContent.style.setProperty(shadowVariable,'hidden');
        }
    },
    debounceScroll: function (callbackFunction, debouncingFlagObject){
        if(!debouncingFlagObject.value){
            debouncingFlagObject.value = true;
            window.requestAnimationFrame(() => {
                try{
                    callbackFunction();
                }catch(error){

                }
                debouncingFlagObject.value = false;
            });
        }
    },
    svgScroll: function (){
        //Setup Base Variables
        const svgVars = this.getVariables();
        const svgContent = document.querySelector(svgVars.scrollContainerClass);
        let svgResponse = {};

        //Run only if Layout is loaded
        if(svgContent){
            const svgHeader = svgContent.querySelector(svgVars.header);
            const svgWrapper = svgContent.querySelector(svgVars.svgBackgroundClass + ' ' + svgVars.svgWrapperClass);
            
            //Run only if everything is loaded
            if(svgContent && svgHeader && svgWrapper && svgVars.svgWidth && svgVars.svgHeight && svgVars.svgBreakPoint){
                //Setup Helper Variables
                const svgHeaderHeight = this.getHeaderSize(svgHeader);
                const svgStatusBarHeight = this.getStatusBarSize();
                const svgOffsetHeight =  svgWrapper.offsetHeight;
                const svgPath = svgWrapper.querySelector(svgVars.svgPath);
                const svgCombinedHeight = this.getSvgHeight(svgOffsetHeight) - (svgHeaderHeight + svgStatusBarHeight);
                
                //Setup Scroll Variables
                let svgLastScrollY = 0;
                let svgIsDebouncing = { value: false };
                const svgThreshold = 0;

                //Setup context Variables
                this.svgIsReset = !this.svgExists;
                this.svgExists = true;

                let curveHeight = (prog,min,max) => {
                    if(prog <= 0){
                        return max;
                    }else if(prog >= 1){
                        return min;
                    }else{
                        return min + ((max - min) * (1 - prog));
                    }
                }
                //Run only if variables are defined
                if(isNaN(svgCombinedHeight) || !svgPath){
                    return svgResponse;
                }else{
                    function svgHandleScroll () {
                        const svgCurrentScrollY = svgContent.scrollTop;
                        const svgProgress = Math.min(svgCurrentScrollY / svgCombinedHeight, 1);

                        if(Math.abs(svgCurrentScrollY - svgLastScrollY) < svgThreshold){
                            return;
                        }else{
                            if(svgCurrentScrollY <= svgCombinedHeight){
                                svgPath.setAttribute('d','M 0,0 H' + svgVars.svgWidth + ' V' + svgVars.svgBreakPoint + ' Q ' + (svgVars.svgWidth / 2) + ',' + curveHeight(svgProgress,svgVars.svgBreakPoint,svgVars.svgCurvePoint) + ' 0,' + svgVars.svgBreakPoint + ' V0Z');
                            }
                        }
                        svgLastScrollY = svgCurrentScrollY;
                    }

                    const svgProcessScroll = () => {
                        this.debounceScroll(svgHandleScroll,svgIsDebouncing);
                    }

                    svgContent.addEventListener('scroll',svgProcessScroll, { passive: true });

                    svgResponse = {
                        element: svgContent,
                        scrollEvent: svgProcessScroll
                    }
                }
            }
        }
        return svgResponse;
    },
    shadowScroll: function (){
        //Setup Base Variables
        const shadowVars = this.getVariables();
        const shadowContent = document.querySelector(shadowVars.scrollContainerClass);
        let shadowResponse = {};
        //Run only if Layout is loaded
        if(shadowContent){
            //Setup Scroll Variables
            let shadowLastScrollY = 0;
            let shadowIsDebouncing = { value: false };
            const shadowThreshold = 0;
            let shadowShow = false;

            const shadowHandleScroll = () => {
                const shadowCurrentScrollY = shadowContent.scrollTop;
                const shadowScrollHeight = shadowContent.scrollHeight;
                const shadowContentHeight = shadowContent.clientHeight;

                if(Math.abs(shadowCurrentScrollY - shadowLastScrollY) < shadowThreshold){
                    return;
                }else{
                    //Footer logic
                    if(Math.abs(shadowScrollHeight - (shadowCurrentScrollY + shadowContentHeight)) < 1){
                        this.setScrollShadow(shadowContent, shadowVars.footerVisibilityVar, false);
                    }else{
                        this.setScrollShadow(shadowContent, shadowVars.footerVisibilityVar, true);
                    }

                    //Header logic
                    shadowShow = shadowCurrentScrollY > 0 && (this.svgExists ? this.svgIsScrolled : true);
                    this.setScrollShadow(shadowContent, shadowVars.headerVisibilityVar, shadowShow);
                }

                shadowLastScrollY = shadowCurrentScrollY;
            }

            //Execute logic once on this flow to establish initial shadow state.

            //Footer logic
            const shadowTimeout = window.setTimeout(shadowHandleScroll,200);

            const shadowProcessScroll = () => {                
                this.debounceScroll(shadowHandleScroll,shadowIsDebouncing);
            }

            shadowContent.addEventListener('scroll',shadowProcessScroll, { passive: true });

            shadowResponse = {
                element: shadowContent,
                scrollEvent: shadowProcessScroll,
                timeout: shadowTimeout
            }
        }
        return shadowResponse;
    },
    mainScroll: function (headerScrolledCallback){
        const mainVars = this.getVariables();
        let mainResponse = {};
        const mainContent = document.querySelector(mainVars.scrollContainerClass);

        //Run only if Layout is loaded
        if(mainContent){
            const mainHeader = mainContent.querySelector(mainVars.header);
            const mainHeaderTopContent = mainContent.querySelector(mainVars.header + ' ' + mainVars.headerTop);

            //Run only if variables are defined
            if(mainContent && mainHeader && mainHeaderTopContent){

                const mainHeaderHeight = this.getHeaderSize(mainHeader);
                const mainStatusBarHeight = this.getStatusBarSize();
                const mainCombinedHeight = mainHeaderHeight + mainStatusBarHeight;

                let mainLastScrollY = 0;
                let mainIsDebouncing = { value: false};
                const mainThreshold = 0;
                let mainLastTrigger = false;

                //Run only if variables are defined
                if(isNaN(mainHeaderHeight) || isNaN(mainStatusBarHeight)){
                    return;
                }else{
                    function mainHandleScroll () {
                        const mainCurrentScrollY = mainContent.scrollTop;
                        const mainProgress = Math.min(mainCurrentScrollY / mainHeaderHeight, 1);

                        if(Math.abs(mainCurrentScrollY - mainLastScrollY) < mainThreshold){
                            return;
                        }else{
                            if(mainCurrentScrollY >= mainCombinedHeight){
                                if(mainLastTrigger !== true){
                                    headerScrolledCallback(true);
                                    mainLastTrigger = true;
                                }
                            }else{
                                if(mainLastTrigger !== false){
                                    headerScrolledCallback(false);
                                    mainLastTrigger = false;
                                }

                                mainHeaderTopContent.style.paddingTop = Math.round(mainStatusBarHeight * mainProgress) + 'px';
                            }
                        }
                        mainLastScrollY = mainCurrentScrollY;
                    }
                    //Execute main onScroll function
                    const mainProcessScroll = () => {
                        this.debounceScroll(mainHandleScroll,mainIsDebouncing);
                    }
                    //Add eventListener to Scrollable Container
                    mainContent.addEventListener('scroll',mainProcessScroll, { passive: true });
                    
                    //Set function outputs to be destroyed on the OnDestroy
                    mainResponse = {
                        element: mainContent,
                        scrollEvent: mainProcessScroll
                    }
                }
            }
        }        
        return mainResponse;
    },
    mainFixedScroll: function (headerScrolledCallback){
        const mainVars = this.getVariables();
        let mainResponse = {};
        const mainContent = document.querySelector(mainVars.scrollContainerClass);

        //Run only if Layout is loaded
        if(mainContent){
            const mainHeader = mainContent.querySelector(mainVars.headerTopSearch);
            const mainHeaderTopContent = mainContent.querySelector(mainVars.header + ' ' + mainVars.headerTop);

            //Run only if variables are defined
            if(mainContent && mainHeader && mainHeaderTopContent){

                const mainHeaderHeight = this.getHeaderSize(mainHeader);
                const mainStatusBarHeight = this.getStatusBarSize();
                const mainCombinedHeight = mainHeaderHeight + mainStatusBarHeight;

                let mainLastScrollY = 0;
                let mainIsDebouncing = { value: false};
                const mainThreshold = 0;
                let mainLastTrigger = false;

                //Run only if variables are defined
                if(isNaN(mainHeaderHeight) || isNaN(mainStatusBarHeight)){
                    return;
                }else{
                    function mainHandleScroll () {
                        const mainCurrentScrollY = mainContent.scrollTop;
                        const mainProgress = Math.min(mainCurrentScrollY / mainHeaderHeight, 1);

                        if(Math.abs(mainCurrentScrollY - mainLastScrollY) < mainThreshold){
                            return;
                        }else{
                            if(mainCurrentScrollY >= mainCombinedHeight){
                                if(mainLastTrigger !== true){
                                    headerScrolledCallback(true);
                                    mainLastTrigger = true;
                                }
                            }else{
                                if(mainLastTrigger !== false){
                                    headerScrolledCallback(false);
                                    mainLastTrigger = false;
                                }

                                mainHeaderTopContent.style.paddingTop = Math.round(mainStatusBarHeight * mainProgress) + 'px';
                            }
                        }
                        mainLastScrollY = mainCurrentScrollY;
                    }
                    //Execute main onScroll function
                    const mainProcessScroll = () => {
                        this.debounceScroll(mainHandleScroll,mainIsDebouncing);
                    }
                    //Add eventListener to Scrollable Container
                    mainContent.addEventListener('scroll',mainProcessScroll, { passive: true });
                    
                    //Set function outputs to be destroyed on the OnDestroy
                    mainResponse = {
                        element: mainContent,
                        scrollEvent: mainProcessScroll
                    }
                }
            }
        }        
        return mainResponse;
    },
    homeScroll: function (searchScrolledCallback, svgScrolledCallback){
        //Setup Base Variables
        const homeVars = this.getVariables();
        const homeContent = document.querySelector(homeVars.scrollContainerClass);
        let homeResponse = {};

        //Run only if Layout is loaded
        if(homeContent){
            const homeHeader = homeContent.querySelector(homeVars.header);
            const inputSearch = homeContent.querySelector(homeVars.searchInputClass);
            const homeSvgWrapper = homeContent.querySelector(homeVars.svgBackgroundClass + ' ' + homeVars.svgWrapperClass);

            //Run only if Layout is loaded
            if(homeContent && homeHeader && inputSearch && homeSvgWrapper){
                //Setup Helper Variables
                const homeInputSearchHeight = inputSearch.offsetHeight;
                const homeSvgHeight = homeSvgWrapper.offsetHeight;
                const homeHeaderHeight = this.getHeaderSize(homeHeader);
                const homeStatusBarHeight = this.getStatusBarSize();
                const combinedHeight = this.getSvgHeight(homeSvgHeight) - (homeHeaderHeight + homeStatusBarHeight);

                //Setup Scroll Variables
                let homeLastScrollY = 0;
                let homeIsDebouncing = { value: false};
                const homeThreshold = 0;
                let homeInputLastTrigger = false;
                let homeSvgLastTrigger = false;

                //Run only if variables are defined
                if(isNaN(combinedHeight) || isNaN(homeInputSearchHeight)){
                    return homeResponse;
                }else{
                    const homeHandleScroll = () => {
                        const homeCurrentScrollY = homeContent.scrollTop;

                        if(Math.abs(homeCurrentScrollY - homeLastScrollY) < homeThreshold){
                            return;
                        }else{
                            //Check for Search Input
                            if(homeCurrentScrollY >= homeInputSearchHeight){
                                if(homeInputLastTrigger !== true){
                                    searchScrolledCallback(true);
                                    homeInputLastTrigger = true;
                                }
                            }else{
                                if(homeInputLastTrigger !== false){
                                    searchScrolledCallback(false);
                                    homeInputLastTrigger = false;
                                }
                            }
                            //Check for SVG Background
                            if(homeCurrentScrollY >= combinedHeight){
                                if(homeSvgLastTrigger !== true){
                                    svgScrolledCallback(true);
                                    homeSvgLastTrigger = true;
                                    if(this.svgExists){
                                        this.svgIsScrolled = true;
                                    }
                                }
                            }else{
                                if(homeSvgLastTrigger !== false){
                                    svgScrolledCallback(false);
                                    homeSvgLastTrigger = false;
                                    if(this.svgExists){
                                        this.svgIsScrolled = false;
                                    }
                                }
                            }
                        }
                        homeLastScrollY = homeCurrentScrollY;
                    }
                    //Execute main onScroll function
                    const homeProcessScroll = () => {
                        this.debounceScroll(homeHandleScroll,homeIsDebouncing);
                    }
                    //Add eventListener to Scrollable Container
                    homeContent.addEventListener('scroll',homeProcessScroll, { passive: true });

                    //Set function outputs to be destroyed on the OnDestroy
                    homeResponse = {
                        element: homeContent,
                        scrollEvent: homeProcessScroll
                    }
                }
            }
        }
        return homeResponse;
    },
    removeEvents: function (element,mainScrollEvent,scrollEvent){
        if(element){
            if(mainScrollEvent){
                element.removeEventListener('scroll',mainScrollEvent);
            }
            if(scrollEvent){
                element.removeEventListener('scroll',scrollEvent);
            }
        }
    },
    clearTimeout: function (timeout){
        if(timeout){
            window.clearTimeout(timeout);
        }
    }
}