# Pack of UI flow Directory_Photobook (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Photobook_Carousel, Photobook_Gallery, Photobook_Gallery_Item, Photobook_Item, Photobook_Options_Bottom, Photobook_Options_Left, Photobook_Options_Player, Photobook_Options_Right
Blocks of other UBTConnect flows that the flow uses (transitive): 12

## Block Photobook_Carousel (flow Directory_Photobook)
- public: False
- input parameters: In_Households: UI_PhotobookHousehold List (mandatory); In_SelectedHousehold: SelectedHousehold (mandatory)
- events: ClosePhotobook(Event_CurrentHousehold: UI_PhotobookHousehold (mandatory)) mandatory
- local variables: StartingPosition: Integer; IsZoomedIn: Boolean; MainContainerClass: Text = "photobook-carousel"; AutoplaySettings: AutoplaySettings; CarouselConfigs: SplideConfigs; CurrentPosition: Integer; CurrentHousehold: UI_PhotobookHousehold; IsShow: Boolean = True; TimerDuration: Integer = 5000; CurrentTimer: Object; IsReplaying: Boolean
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady; OnParametersChanged → OnParametersChanged; OnDestroy → StopInactivityTimer(StartNew=False)
- used by (UBTConnect): Photobook

#### Widget tree
```
container #Carousel_Cont  [style=MainContainerClass]
  container #Carousel_Touch_Cont  [style=MainContainerClass + "--touch"; on onclick → Handler_ScreenClick]
    block Carousel (OutSystemsUI_2_23.Interaction) #Carousel_Photobook
      args: ExtendedClass=MainContainerClass + "--carousel", Navigation=Entities.CarouselNavigation.None, OptionalConfigs={ AutoPlay: AutoplaySettings.IsEnabled, Loop: False, StartingPosition: StartingPosition }
      on Initialized → OnInitialize_Carousel(CarouselId=CarouselId)
      on OnSlideMoved → Carousel_OnSlideMoved(CarouselId=CarouselId, ItemIndex=ItemIndex)
      placeholder CarouselItems:
        list source=In_Households mode=Default  [style="list list-group " + MainContainerClass + "--list"; disable-virtualization=True]
          block Photobook_Item (UBTConnect.Directory_Photobook)
            args: In_Household=In_Households.Current, In_MainContainerClass=MainContainerClass
            on MinZoomReached → Handler_MinZoomReached
            on ZoomIn → Handler_ZoomIn
  block Photobook_Options_Left (UBTConnect.Directory_Photobook)
    args: In_CurrentHousehold=CurrentHousehold, In_IsShow=IsShow, In_MainContainerClass=MainContainerClass
    on Closed → Handler_SheetIsClosed
    on SheetIsOpen → Handler_SheetIsOpen
  block Photobook_Options_Right (UBTConnect.Directory_Photobook)
    args: In_CurrentSpeed=AutoplaySettings.Speed, In_IsShow=IsShow, In_MainContainerClass=MainContainerClass
    on SheetIsOpen → Handler_SheetIsOpen
    on Closed → Handler_SheetIsClosed
    on ClosePhotobook → Handler_ClosePhotobook
    on SetSpeed → Handler_ChangeSpeed(SelectedSpeed=Event_SelectedSpeed)
  block Photobook_Options_Player (UBTConnect.Directory_Photobook)
    args: In_IsFinalItem=(CurrentPosition + 1) = In_Households.Length, In_IsShow=IsShow, In_MainContainerClass=MainContainerClass
    on Clicked → Handler_PlayerClicked(Event_IsPlay=Event_IsPlay)
    on Replay → Handler_ReplayCarousel
  block Photobook_Gallery (UBTConnect.Directory_Photobook)
    args: In_IsShow=IsShow, In_LocalityHouseholdIds=ConvertList(In_Households,  {Value:"HouseholdId"}), In_SelectedPosition=CurrentPosition
    on Clicked → Handler_ClickedGalleryItem(Event_SelectedHousehold=ConvertRecord(Event_SelectedHousehold,  {Id:"Id",Position:"Position"}))
    on ListTouchEnd → StartInactivityTimer
    on ListTouchStart → StopInactivityTimer(StartNew=False)
```

#### Block actions
- **Carousel_OnSlideMoved** inputs: CarouselId: Text (mandatory); ItemIndex: Integer (mandatory)
  ```
  assign: CurrentPosition = ItemIndex
  assign (CurrentHousehold): CurrentHousehold.HouseholdId = In_Households[CurrentPosition].HouseholdId; CurrentHousehold.HouseholdName = In_Households[CurrentPosition].HouseholdName; CurrentHousehold.Locality = In_Households[CurrentPosition].Locality
  call Carousel_SetCurrentPosition(In_CarouselWidgetId=Carousel_Photobook.Id, In_Position=CurrentPosition)
  if (Is Replaying?) IsReplaying and (CurrentPosition = 0)
    assign: IsReplaying = False
    call ToggleAutoplay(In_IsPlay=True) as StartAutoplay
    end
  else
    if (Is last position?) (CurrentPosition + 1) = In_Households.Length
      if (Is Autoplay?) AutoplaySettings.IsEnabled
        call ToggleAutoplay(In_IsPlay=False) as StopAutoplay
        end
      else
        end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **CheckForAutoplayRestart**
  ```
  if (Is Autoplay?) AutoplaySettings.IsEnabled
    end
  else
    if (Is Temporarily Paused?) AutoplaySettings.IsTemporarilyPaused
      assign (Restart Autoplay): AutoplaySettings.IsEnabled = True; AutoplaySettings.IsTemporarilyPaused = False
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_ChangeSpeed** inputs: SelectedSpeed: Photobook_Speed Identifier (mandatory)
  ```
  call StartInactivityTimer()
  if (Different Speed?) IntegerToIdentifier(CarouselConfigs.interval) <> SelectedSpeed
    call SetNewSpeed(SelectedSpeed=SelectedSpeed)
    call CheckForAutoplayRestart()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_ClickedGalleryItem** inputs: Event_SelectedHousehold: Id, Position Record (mandatory)
  ```
  call StopInactivityTimer(StartNew=True)
  call CarouselGoTo(ItemIndex=Event_SelectedHousehold.Position, WidgetId=Carousel_Photobook.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ClosePhotobook**
  ```
  call StopInactivityTimer(StartNew=False)
  trigger event ClosePhotobook(Event_CurrentHousehold=CurrentHousehold)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MinZoomReached**
  ```
  call CarouselToggleDrag(HasDrag=True, WidgetId=Carousel_Photobook.Id)
  if (Success?) CarouselToggleDrag.Success
    end
  else
    call JSUtils_Console_Log(Message="Carousel Toggle Drag Error - Code: " + CarouselToggleDrag.ErrorMessage.Code + " | Message: " + CarouselToggleDrag.ErrorMessage.Message)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_PlayerClicked** inputs: Event_IsPlay: Boolean (mandatory)
  ```
  call ToggleAutoplay(In_IsPlay=Event_IsPlay)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ReplayCarousel**
  ```
  call StopInactivityTimer(StartNew=True)
  assign: IsReplaying = True
  call CarouselGoTo(ItemIndex=0, WidgetId=Carousel_Photobook.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ScreenClick**
  ```
  call StopInactivityTimer(StartNew=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SheetIsClosed**
  ```
  call StartInactivityTimer()
  call CheckForAutoplayRestart()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_SheetIsOpen**
  ```
  call StopInactivityTimer(StartNew=False)
  if (Is Autoplay?) AutoplaySettings.IsEnabled
    assign (Set Temporary Pause): AutoplaySettings.IsEnabled = False; AutoplaySettings.IsTemporarilyPaused = True
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_ZoomIn**
  ```
  assign: IsZoomedIn = True
  call CarouselToggleDrag(HasDrag=False, WidgetId=Carousel_Photobook.Id)
  if (Success?) CarouselToggleDrag.Success
    end
  else
    call JSUtils_Console_Log(Message="Carousel Toggle Drag Error - Code: " + CarouselToggleDrag.ErrorMessage.Code + " | Message: " + CarouselToggleDrag.ErrorMessage.Message)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  if Client.PhotobookCarousel_SelectedSpeed = NullIdentifier()
    assign: Client.PhotobookCarousel_SelectedSpeed = Entities.Photobook_Speed.EightSeconds
    [M1] assign (Set Autoplay settings): AutoplaySettings.Speed = Client.PhotobookCarousel_SelectedSpeed; AutoplaySettings.IsEnabled = False; AutoplaySettings.IsTemporarilyPaused = False
    assign (Set Splide Configs): CarouselConfigs.speed = 500; CarouselConfigs.paginationDirection = "ltr"; CarouselConfigs.waitForTransition = Entities.BooleanTypes.Unset; CarouselConfigs.interval = IdentifierToInteger(AutoplaySettings.Speed); CarouselConfigs.wheel = Entities.BooleanTypes.False; CarouselConfigs.flickPower = 400; CarouselConfigs.flickMaxPages = 1; CarouselConfigs.resetProgress = Entities.BooleanTypes.False; CarouselConfigs.updateOnMove = Entities.BooleanTypes.True; CarouselConfigs.pauseOnFocus = Entities.BooleanTypes.False; CarouselConfigs.pauseOnHover = Entities.BooleanTypes.False
    assign (Initialize Household Vars): StartingPosition = In_SelectedHousehold.Position; CurrentPosition = StartingPosition; CurrentHousehold.HouseholdId = In_Households[CurrentPosition].HouseholdId; CurrentHousehold.HouseholdName = In_Households[CurrentPosition].HouseholdName; CurrentHousehold.Locality = In_Households[CurrentPosition].Locality
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize_Carousel** inputs: CarouselId: Text (mandatory)
  ```
  javascript GetSplideCallbacks() → Moved: Object
    | $parameters.Moved = $actions.SplideEvent_Moved;
  call SetSplideEvent(EventName="moved", Handler=GetSplideCallbacks.Moved, WidgetId=Carousel_Photobook.Id) as Moved
  call SetCarouselConfigs()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  call StartInactivityTimer()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetCarouselConfigs**
  ```
  call SetSplideConfigs(ProviderConfigs=CarouselConfigs, WidgetId=Carousel_Photobook.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetNewSpeed** inputs: SelectedSpeed: Photobook_Speed Identifier (mandatory)
  ```
  assign (Set new Speed): Client.PhotobookCarousel_SelectedSpeed = SelectedSpeed; AutoplaySettings.Speed = Client.PhotobookCarousel_SelectedSpeed; CarouselConfigs.interval = IdentifierToInteger(AutoplaySettings.Speed)
  call SetCarouselConfigs()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SetShowOptions** inputs: IsToShow: Boolean (mandatory)
  ```
  assign: IsShow = IsToShow
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **SplideEvent_Moved** inputs: newIndex: Integer (mandatory); previousIndex: Integer (mandatory); destinationIndex: Integer (mandatory)
  ```
  call JSUtils_Console_Log(Message="New/Current: " + newIndex + " | Previous:" + previousIndex + " | Destination: " + destinationIndex )
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **StartInactivityTimer**
  ```
  javascript StartTimer(Duration=TimerDuration) → TimerObj: Object
    | $parameters.TimerObj = window.setTimeout(() => {
    |     $actions.SetShowOptions(false)
    | }, $parameters.Duration)
  assign: CurrentTimer = StartTimer.TimerObj
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **StopInactivityTimer** inputs: StartNew: Boolean (mandatory)
  ```
  javascript ClearTimer(TimerObj=CurrentTimer)
    | if($parameters.TimerObj){
    |     window.clearTimeout($parameters.TimerObj);
    | }
  assign: CurrentTimer = NullObject()
  call SetShowOptions(IsToShow=True)
  if (Is Start New?) StartNew
    call StartInactivityTimer()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ToggleAutoplay** inputs: In_IsPlay: Boolean (mandatory)
  ```
  assign (Set Autoplay Settings): AutoplaySettings.IsEnabled = In_IsPlay; AutoplaySettings.IsTemporarilyPaused = False
  call SetCarouselConfigs()
  if (Is Autoplay?) AutoplaySettings.IsEnabled
    call CarouselToggleDrag(HasDrag=False, WidgetId=Carousel_Photobook.Id) as CarouselToggleDrag_Disable
    end
  else
    call CarouselToggleDrag(HasDrag=True, WidgetId=Carousel_Photobook.Id) as CarouselToggleDrag_Enable
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Photobook_Gallery (flow Directory_Photobook)
- public: False
- input parameters: In_LocalityHouseholdIds: Long Integer List; In_SelectedPosition: Integer (mandatory); In_IsShow: Boolean (mandatory)
- events: Clicked(Event_SelectedHousehold: SelectedHousehold (mandatory)) mandatory; ListTouchEnd() mandatory; ListTouchStart() mandatory
- local variables: SelectedPosition: Integer; MainContainerClass: Text = "photobook-gallery"
- lifecycle: OnInitialize → OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Photobook_Carousel

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Household_Gallery_Cont
  args: ExtendedClasses=MainContainerClass, Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, FlexDirection: Entities.UBT_FlexDirection.Col…
  placeholder Content:
    block Photobook_Options_Bottom (UBTConnect.Directory_Photobook)
      args: In_CurrentPosition=SelectedPosition, In_IsShow=In_IsShow, In_MainContainerClass=MainContainerClass, In_TotalHouseholds=In_LocalityHouseholdIds.Length
    list source=In_LocalityHouseholdIds mode=Default #Photobook_Gallery_List  [style="list list-group " + MainContainerClass + "--list"; disable-virtualization=True; on componentdidmount → ScrollSelectedIntoPosition(IsInstantScroll=True)]
      block Photobook_Gallery_Item (UBTConnect.Directory_Photobook)
        args: In_HouseholdId=In_LocalityHouseholdIds.Current, In_IsActive=SelectedPosition = In_LocalityHouseholdIds.CurrentRowNumber, In_TargetSubClass=MainContainerClass + "--item"
        on Clicked → Handler_ClickedHousehold(ClickedHousehold={ Id: Event_HouseholdId, Position: In_LocalityHouseholdIds.CurrentRowNumber })
block TouchEvents (OutSystemsUI_2_23.Utilities2)
  args: PreventDefaults=False, WidgetId=Photobook_Gallery_List.Id
  on Start → ListTouchStart
  on End → ListTouchEnd
```

#### Block actions
- **CheckIfScrollIsNeeded** inputs: TargetPosition: Integer (mandatory); ForceScroll: Boolean
  ```
  if ForceScroll
    [M1] assign (Set new Selected): SelectedPosition = TargetPosition
    call ScrollSelectedIntoPosition()
    end
  else
    if (Already Selected?) TargetPosition = SelectedPosition
      end
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_ClickedHousehold** inputs: ClickedHousehold: SelectedHousehold (mandatory)
  ```
  call CheckIfScrollIsNeeded(TargetPosition=ClickedHousehold.Position)
  trigger event Clicked(Event_SelectedHousehold={ Id: ClickedHousehold.Id, Position: SelectedPosition })
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  assign (Set Selected Position): SelectedPosition = In_SelectedPosition
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call CheckIfScrollIsNeeded(ForceScroll=not In_IsShow, TargetPosition=In_SelectedPosition)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScrollSelectedIntoPosition** inputs: IsInstantScroll: Boolean
  ```
  javascript ScrollIntoPosition(ElementSubClass=MainContainerClass + "--item", IsInstantScroll=IsInstantScroll, MainContainerClass=MainContainerClass, ScrollableContainerId=Photobook_Gallery_List.Id, SelectedItemPosition=SelectedPosition + 1)
    | const scrollableList = document.getElementById($parameters.ScrollableContainerId);
    | if(scrollableList){
    |     const targetEle = document.querySelectorAll("." + $parameters.MainContainerClass + " .OSBlockWidget:has(." + $parameters.ElementSubClass + ")")[0];
    |     const itemPosition = $parameters.SelectedItemPosition;
    |     if(targetEle && itemPosition){
    |         const eleStats = {
    |             rect: targetEle.getBoundingClientRect(),
    |             styles: window.getComputedStyle(targetEle)
    |         }
    |         const eleValues = {
    |             marginLeft: parseFloat(eleStats.styles.marginLeft),
    |             marginRight: parseFloat(eleStats.styles.marginRight)
    |         }
    |         const eleWidth = eleStats.rect.width + eleValues.marginLeft + eleValues.marginRight;
    | 
    |         const scrollAmount = (itemPosition * eleWidth) - ((eleValues.marginRight / 2) + (eleWidth / 2));
    | 
    |         scrollableList.scroll(
    |             {
    |                 left: scrollAmount,
    |                 behavior: $parameters.IsInstantScroll ? "instant" : "smooth"
    |             }
    |         );
    |     }
    | }
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Photobook_Gallery_Item (flow Directory_Photobook)
- public: False
- input parameters: In_HouseholdId: Long Integer (mandatory); In_IsActive: Boolean (mandatory); In_TargetSubClass: Text (mandatory)
- events: Clicked(Event_HouseholdId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Photobook_Gallery

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Household_Gallery_Item
  args: ExtendedClasses=In_TargetSubClass, Options={ BorderOptions: { Color: If(In_IsActive, Entities.UBT_Color.Neutral0, NullTextIdentifier()), Size: { GeneralSizeId: If(In_IsActive, Entities.UBT_Size.Small, NullTextIdentifier()) }, Radius: { Genera…
  on Clicked → Clicked(Event_HouseholdId=In_HouseholdId)
  placeholder Content:
    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
      args: EntityId=In_HouseholdId, EntityType=Entities.Connect_Entity.Household, ImageSize={ Height: Entities.UBT_ImageSize.Small_40 }, In_BorderRadius=Entities.UBT_Shape.Soft
```

## Block Photobook_Item (flow Directory_Photobook)
- public: False
- input parameters: In_Household: UI_PhotobookHousehold (mandatory); In_MainContainerClass: Text (mandatory)
- events: MinZoomReached(); ZoomIn()
- local variables: IsZoomedIn: Boolean
- lifecycle: none
- used by (UBTConnect): Photobook_Carousel

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #CarouselItem
  args: ExtendedClasses=In_MainContainerClass + "-item", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center }, HeightOptions: {  } }
  placeholder Content:
    container #DIV_BackgroundImage  [style=In_MainContainerClass + "-item-cont"]
      block UBT_LazyImage (UBTConnect_Utils.CW_Image) #Background_Image
        args: EntityId=In_Household.HouseholdId, EntityType=Entities.Connect_Entity.Household, ExtendedClass=In_MainContainerClass + "-background-image", ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
    container #DIV_ForegroundImage  [style=In_MainContainerClass + "-item-cont"]
      block PanZoom (PanZoom.PanZoom)
        on ZoomIn → Handler_ZoomIn
        on MinZoomReached → Handler_MinZoomReached
        placeholder Image:
          block UBT_LazyImage (UBTConnect_Utils.CW_Image) #Foreground_Image
            args: EntityId=In_Household.HouseholdId, EntityType=Entities.Connect_Entity.Household, ExtendedClass=In_MainContainerClass + "-foreground-image", ImageSize={ Height: Entities.UBT_ImageSize.MaxHeight_100vh }
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Title_Cont
      args: ExtendedClasses=In_MainContainerClass + "-title-cont", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.Center, FlexDirection: Entities.UBT_FlexDirection.Colum…
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Title_Background
          args: ExtendedClasses=In_MainContainerClass + "-title-background", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral9, Opacity: 0.25 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.DoubleExtraLarge }, Bor…
          placeholder Content:
            block CustomText (UBTConnectLibrary.BasePatterns) #Title_FamilyName
              args: In_Text=In_Household.HouseholdName, In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
            block CustomText (UBTConnectLibrary.BasePatterns) #Title_Locality
              args: In_Text=In_Household.Locality, In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small }
```

#### Block actions
- **Handler_MinZoomReached**
  ```
  assign: IsZoomedIn = False
  trigger event MinZoomReached()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ZoomIn**
  ```
  assign: IsZoomedIn = True
  trigger event ZoomIn()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Photobook_Options_Bottom (flow Directory_Photobook)
- public: False
- input parameters: In_MainContainerClass: Text (mandatory); In_IsShow: Boolean (mandatory); In_CurrentPosition: Integer (mandatory); In_TotalHouseholds: Integer (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Photobook_Gallery

#### Widget tree
```
if In_TotalHouseholds <> NullIdentifier() #If_HasData
  block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Bottom
    args: ExtendedClasses=In_MainContainerClass + "--counter", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral9, Opacity: 0.6 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, BorderOptions: { Colo…
    placeholder Content:
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: Text=(In_CurrentPosition + 1) + "/" + In_TotalHouseholds, TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Bold }
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Family, In_SizeId=Entities.UBT_IconsSize.Base_24
```

## Block Photobook_Options_Left (flow Directory_Photobook)
- public: False
- input parameters: In_MainContainerClass: Text (mandatory); In_IsShow: Boolean (mandatory); In_CurrentHousehold: UI_PhotobookHousehold (mandatory)
- events: Closed() mandatory; SheetIsOpen() mandatory
- local variables: InfoSheetId: Text; isLoading: Boolean; LastFetched: UI_PhotobookHousehold
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): Photobook_Carousel

#### Data sources
- data action **GetHouseholdCaption** fetch=OnDemand; outputs: HouseholdCaption: Text; LastFetchedHousehold: UI_PhotobookHousehold; OnAfterFetch → OnAfterFetch_GetHouseholdCaption
  ```
  call-server GetImageCaptions_Photobook(In_HouseholdId=In_CurrentHousehold.HouseholdId)
  assign (Set Outputs): HouseholdCaption = GetImageCaptions_Photobook.PhotobookCaption; LastFetchedHousehold = In_CurrentHousehold
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Top_Left
  args: ExtendedClasses=In_MainContainerClass + "--top-left", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral9, Opacity: 0.6 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral0, Size: { Gen…
  on Clicked → Handler_ClickedInfo
  placeholder Content:
    block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Top_Info
      args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Info, In_SizeId=Entities.UBT_IconsSize.Base_24
if In_IsShow #If_IsShow
  block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_Info
    args: ExtendedClasses=In_MainContainerClass + "-bottom-sheet " + In_MainContainerClass + "-bottom-sheet--info", Title=In_CurrentHousehold.Locality
    on OnToggle → Handler_ToggleInfoSheet(IsOpen=IsOpen)
    on OnClose → ToggleInfoSheet(IsOpen=False)
    on Initialized → InfoSheetInitialized(Id=Id)
    placeholder Content:
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
        args: In_IsLoading=isLoading
        placeholder Placeholder_LoadingSection:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.FlexStart, JustifyContent: Entities.UBT_JustifyContent.Center, FlexDirection: Entities.UBT_FlexDirection.Co…
            placeholder Content:
              block SanitizedHtml (ReactiveHtmlSanitizer.HtmlSanitizer)
                args: AllowedTags="nobr,sup", ResetWhitelist=False, Value=GetHouseholdCaption.HouseholdCaption
```

#### Block actions
- **Handler_ClickedInfo**
  ```
  call ToggleInfoSheet(IsOpen=True)
  if (Already Fetched?) LastFetched = In_CurrentHousehold
    end
  else
    assign (isLoading): isLoading = True
    refresh data GetHouseholdCaption
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_ToggleInfoSheet** inputs: IsOpen: Boolean (mandatory)
  ```
  if IsOpen
    trigger event SheetIsOpen()
    end
  else
    trigger event Closed()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **InfoSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: InfoSheetId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetHouseholdCaption**
  ```
  assign: isLoading = False
  assign: LastFetched = GetHouseholdCaption.LastFetchedHousehold
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Is View Restored From Cache?) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    call GetSkeleton_UI_PhotobookCaption()
    assign (Set Skeleton Caption): GetHouseholdCaption.HouseholdCaption = GetSkeleton_UI_PhotobookCaption.Caption
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ToggleInfoSheet** inputs: IsOpen: Boolean (mandatory)
  ```
  if IsOpen
    call BottomSheetOpen(WidgetId=InfoSheetId)
    end
  else
    call BottomSheetClose(WidgetId=InfoSheetId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Photobook_Options_Player (flow Directory_Photobook)
- public: False
- input parameters: In_MainContainerClass: Text (mandatory); In_IsShow: Boolean (mandatory); In_IsFinalItem: Boolean (mandatory)
- events: Clicked(Event_IsPlay: Boolean (mandatory)) mandatory; Replay() mandatory
- local variables: IsPlay: Boolean
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Photobook_Carousel

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Player
  args: ExtendedClasses=In_MainContainerClass + "--player", Options={ Visibility: If(In_IsShow,Entities.UBT_Visibility.Visible,Entities.UBT_Visibility.Hidden) }
  placeholder Content:
    if In_IsFinalItem #If_IsFinalItem
      block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Replay
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Replay, In_SizeId=Entities.UBT_IconsSize.NonStandard_64
        on Click → Handler_ClickReplay
    else
      if IsPlay #If_IsPlay
        block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Pause
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Pause, In_SizeId=Entities.UBT_IconsSize.NonStandard_64
          on Click → Handler_TogglePlay(IsPlayState=False)
      else
        block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Play
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.PlayArrow, In_SizeId=Entities.UBT_IconsSize.NonStandard_64
          on Click → Handler_TogglePlay(IsPlayState=True)
```

#### Block actions
- **Handler_ClickReplay**
  ```
  assign: IsPlay = True
  trigger event Replay()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_TogglePlay** inputs: IsPlayState: Boolean (mandatory)
  ```
  assign (Toggle IsPlay): IsPlay = IsPlayState
  trigger event Clicked(Event_IsPlay=IsPlay)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  if (Reached the end?) In_IsFinalItem and IsPlay
    assign: IsPlay = False
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Photobook_Options_Right (flow Directory_Photobook)
- public: False
- input parameters: In_MainContainerClass: Text (mandatory); In_IsShow: Boolean (mandatory); In_CurrentSpeed: Photobook_Speed Identifier (mandatory)
- events: Closed() mandatory; ClosePhotobook() mandatory; SetSpeed(Event_SelectedSpeed: Photobook_Speed Identifier (mandatory)) mandatory; SheetIsOpen() mandatory
- local variables: SpeedSheetId: Text; SelectedSpeed: Photobook_Speed Identifier
- lifecycle: OnInitialize → OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Photobook_Carousel

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Top_Right
  args: ExtendedClasses=In_MainContainerClass + "--top-right", Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyContent.FlexEnd, FlexDirection: Entities.UBT_FlexDirection.Row …
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Top_Speed
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral9, Opacity: 0.6 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral0, Size: { Gen…
      on Clicked → ToggleSpeedSheet(IsOpen=True)
      placeholder Content:
        block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Top_Speed_Icon
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Clock, In_SizeId=Entities.UBT_IconsSize.Base_24
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Photobook_Options_Top_Close
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral9, Opacity: 0.6 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { LeftSizeId: Entities.UBT_Size.Base }, BorderOption…
      on Clicked → ClosePhotobook
      placeholder Content:
        block Icon (UBTConnectLibrary.ConnectPatterns) #Photobook_Options_Top_Close_Icon
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Close, In_SizeId=Entities.UBT_IconsSize.Base_24
if In_IsShow #If_IsShow
  block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_Speed
    args: CloseOnClickOutsite=False, ExtendedClasses=In_MainContainerClass + "-bottom-sheet " + In_MainContainerClass + "-bottom-sheet--speed", ShowHandlerPreview=False, Title="Speed setting"
    on OnClose → ToggleSpeedSheet(IsOpen=False)
    on Initialized → Handler_SpeedInitialized(Id=Id)
    on OnToggle → Handler_ToggleSpeedSheet(IsOpen=IsOpen)
    placeholder Content:
      radiogroup #RadioGroup_SpeedOptions var=SelectedSpeed Mandatory=True style="radio-group " + In_MainContainerClass + "--radio-group"  [style="radio-group " + In_MainContainerClass + "--radio-group"]
        radiobutton #Five value=Entities.Photobook_Speed.FiveSeconds  [style="radio-button " + In_MainContainerClass + "--radio-button"]
          expr: "5s"
        radiobutton #Eight value=Entities.Photobook_Speed.EightSeconds  [style="radio-button " + In_MainContainerClass + "--radio-button"]
          expr: "8s"
        radiobutton #Fifteen value=Entities.Photobook_Speed.FifteenSeconds  [style="radio-button " + In_MainContainerClass + "--radio-button"]
          expr: "15s"
```

#### Block actions
- **Handler_SpeedInitialized** inputs: Id: Text (mandatory)
  ```
  assign (Set Bottom Sheet Id): SpeedSheetId = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ToggleSpeedSheet** inputs: IsOpen: Boolean (mandatory)
  ```
  if IsOpen
    trigger event SheetIsOpen()
    end
  else
    if (New Speed?) SelectedSpeed <> In_CurrentSpeed
      trigger event SetSpeed(Event_SelectedSpeed=SelectedSpeed)
      end
    else
      trigger event Closed()
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnInitialize**
  ```
  assign: SelectedSpeed = In_CurrentSpeed
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  assign: SelectedSpeed = In_CurrentSpeed
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ToggleSpeedSheet** inputs: IsOpen: Boolean (mandatory)
  ```
  if IsOpen
    call BottomSheetOpen(WidgetId=SpeedSheetId)
    end
  else
    call BottomSheetClose(WidgetId=SpeedSheetId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
