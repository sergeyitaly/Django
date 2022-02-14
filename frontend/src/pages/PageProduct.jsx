import React, {useState, useEffect} from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios'; 

import PageProductsTitle from "../components/PageProductsTitle"

import { useParams } from "react-router-dom";

import DakotaBifoldWallet from "../Img/WalletProductsImages/DakotaBifoldWallet.png"
import DakotaBifoldWallet2 from "../Img/WalletProductsImages/DakotaBifoldWallet2.png"
import InsiderWallet from "../Img/WalletProductsImages/InsiderWallet.png"
import InsiderWallet2 from "../Img/WalletProductsImages/InsiderWallet2.png"
import RyderReserveBisonWallet from "../Img/WalletProductsImages/RyderReserveBisonWallet.png"
import RyderReserveBisonWallet2 from "../Img/WalletProductsImages/RyderReserveBisonWallet2.png"
import ChelseaLeatherClutch from "../Img/WalletProductsImages/ChelseaLeatherClutch.png"
import ChelseaLeatherClutch2 from "../Img/WalletProductsImages/ChelseaLeatherClutch2.png"
import ChelseaLeatherClutch3 from "../Img/WalletProductsImages/ChelseaLeatherClutch3.png"
import MadisonCheckbookWallet from "../Img/WalletProductsImages/MadisonCheckbookWallet.png"
import MadisonCheckbookWallet2 from "../Img/WalletProductsImages/MadisonCheckbookWallet2.png"
import MadisonCheckbookWallet3 from "../Img/WalletProductsImages/MadisonCheckbookWallet3.png"
import MadisonWristletWallet from "../Img/WalletProductsImages/MadisonWristletWallet.png"
import MadisonWristletWallet2 from "../Img/WalletProductsImages/MadisonWristletWallet2.png"
import MadisonWristletWallet3 from "../Img/WalletProductsImages/MadisonWristletWallet3.png"
import RyderReserveTrifoldWallet from "../Img/WalletProductsImages/RyderReserveTrifoldWallet.png"
import RyderReserveTrifoldWallet2 from "../Img/WalletProductsImages/RyderReserveTrifoldWallet2.png"
import RyderReserveTrifoldWallet3 from "../Img/WalletProductsImages/RyderReserveTrifoldWallet3.png"
import EnfoldFullsizeWallet from "../Img/WalletProductsImages/EnfoldFullsizeWallet.png"
import EnfoldFullsizeWallet2 from "../Img/WalletProductsImages/EnfoldFullsizeWallet2.png"
import EnfoldFullsizeWallet3 from "../Img/WalletProductsImages/EnfoldFullsizeWallet3.png"
import DenverBillfoldWallet from "../Img/WalletProductsImages/DenverBillfoldWallet.png"
import DenverBillfoldWallet2 from "../Img/WalletProductsImages/DenverBillfoldWallet2.png"

import DenverTravelDuffleBag from "../Img/BagProductsImages/DenverTravelDuffleBag.png"
import DenverTravelDuffleBag2 from "../Img/BagProductsImages/DenverTravelDuffleBag2.png"
import DenverTravelDuffleBag3 from "../Img/BagProductsImages/DenverTravelDuffleBag3.png"
import RyderReserveTravelDuffleBag from "../Img/BagProductsImages/RyderReserveTravelDuffleBag.png"
import RyderReserveTravelDuffleBag2 from "../Img/BagProductsImages/RyderReserveTravelDuffleBag2.png"
import RyderReserveTravelDuffleBag3 from "../Img/BagProductsImages/RyderReserveTravelDuffleBag3.png"
import CamdenBraidedTote from "../Img/BagProductsImages/CamdenBraidedTote.png"
import CamdenBraidedTote2 from "../Img/BagProductsImages/CamdenBraidedTote2.png"
import CamdenBraidedTote3 from "../Img/BagProductsImages/CamdenBraidedTote3.png"
import MadisonTote from "../Img/BagProductsImages/MadisonTote.png"
import MadisonTote2 from "../Img/BagProductsImages/MadisonTote2.png"
import MadisonTote3 from "../Img/BagProductsImages/MadisonTote3.png"
import RyderReserveLaptopBriefcase from "../Img/BagProductsImages/RyderReserveLaptopBriefcase.png"
import RyderReserveLaptopBriefcase2 from "../Img/BagProductsImages/RyderReserveLaptopBriefcase2.png"
import RyderReserveLaptopBriefcase3 from "../Img/BagProductsImages/RyderReserveLaptopBriefcase3.png"
import RooseveltBuffaloMessengerBag from "../Img/BagProductsImages/RooseveltBuffaloMessengerBag.png"
import RooseveltBuffaloMessengerBag2 from "../Img/BagProductsImages/RooseveltBuffaloMessengerBag2.png"
import RooseveltBuffaloMessengerBag3 from "../Img/BagProductsImages/RooseveltBuffaloMessengerBag3.png"
import WalkerTote from "../Img/BagProductsImages/WalkerTote.png"
import WalkerTote2 from "../Img/BagProductsImages/WalkerTote2.png"
import WalkerTote3 from "../Img/BagProductsImages/WalkerTote3.png"
import WalkerSmallBackpack from "../Img/BagProductsImages/WalkerSmallBackpack.png"
import WalkerSmallBackpack2 from "../Img/BagProductsImages/WalkerSmallBackpack2.png"
import WalkerSmallBackpack3 from "../Img/BagProductsImages/WalkerSmallBackpack3.png"
import WalkerLeatherBackpack from "../Img/BagProductsImages/WalkerLeatherBackpack.png"
import WalkerLeatherBackpack2 from "../Img/BagProductsImages/WalkerLeatherBackpack2.png"
import WalkerLeatherBackpack3 from "../Img/BagProductsImages/WalkerLeatherBackpack3.png"

import CraftBeltBrown from "../Img/BeltsProductsImages/CraftBeltBrown.png"
import CraftBeltBrown2 from "../Img/BeltsProductsImages/CraftBeltBrown2.png"
import MountainBeltDarkBrown from "../Img/BeltsProductsImages/MountainBeltDarkBrown.png"
import MountainBeltDarkBrown2 from "../Img/BeltsProductsImages/MountainBeltDarkBrown2.png"
import BlackoutBelt from "../Img/BeltsProductsImages/BlackoutBelt.png"
import BlackoutBelt2 from "../Img/BeltsProductsImages/BlackoutBelt2.png"
import BlackoutBelt3 from "../Img/BeltsProductsImages/BlackoutBelt3.png"
import CraftBeltOlive from "../Img/BeltsProductsImages/CraftBeltOlive.png"
import CraftBeltOlive2 from "../Img/BeltsProductsImages/CraftBeltOlive2.png"
import CraftBeltOlive3 from "../Img/BeltsProductsImages/CraftBeltOlive3.png"
import CraftBeltBlack from "../Img/BeltsProductsImages/CraftBeltBlack.png"
import CraftBeltBlack2 from "../Img/BeltsProductsImages/CraftBeltBlack2.png"
import CraftBeltBlack3 from "../Img/BeltsProductsImages/CraftBeltBlack3.png"
import StocktonBelt from "../Img/BeltsProductsImages/StocktonBelt.png"
import StocktonBelt2 from "../Img/BeltsProductsImages/StocktonBelt2.png"
import HeritageBelt from "../Img/BeltsProductsImages/HeritageBelt.png"
import CraftBeltNatural from "../Img/BeltsProductsImages/CraftBeltNatural.png"
import CraftBeltNatural2 from "../Img/BeltsProductsImages/CraftBeltNatural2.png"
import CraftBeltNatural3 from "../Img/BeltsProductsImages/CraftBeltNatural3.png"
import MountainBeltRusset from "../Img/BeltsProductsImages/MountainBeltRusset.png"
import MountainBeltRusset2 from "../Img/BeltsProductsImages/MountainBeltRusset2.png"
import MountainBeltRusset3 from "../Img/BeltsProductsImages/MountainBeltRusset3.png"

import PersonalizedBracelet from "../Img/BraceletsProductsImages/PersonalizedBracelet.png"
import PersonalizedBracelet2 from "../Img/BraceletsProductsImages/PersonalizedBracelet2.png"
import PersonalizedBracelet3 from "../Img/BraceletsProductsImages/PersonalizedBracelet3.png"
import DoubleWrapMountainCuff from "../Img/BraceletsProductsImages/DoubleWrapMountainCuff.png"
import DoubleWrapMountainCuff2 from "../Img/BraceletsProductsImages/DoubleWrapMountainCuff2.png"
import DoubleWrapMountainCuff3 from "../Img/BraceletsProductsImages/DoubleWrapMountainCuff3.png"
import KnotBracelet from "../Img/BraceletsProductsImages/KnotBracelet.png"
import KnotBracelet2 from "../Img/BraceletsProductsImages/KnotBracelet2.png"
import StrappyWrapBracelet from "../Img/BraceletsProductsImages/StrappyWrapBracelet.png"
import StrappyWrapBracelet2 from "../Img/BraceletsProductsImages/StrappyWrapBracelet2.png"
import SimpleAdjustableCuff from "../Img/BraceletsProductsImages/SimpleAdjustableCuff.png"
import SimpleAdjustableCuff2 from "../Img/BraceletsProductsImages/SimpleAdjustableCuff2.png"
import SecretMessageBracelet from "../Img/BraceletsProductsImages/SecretMessageBracelet.png"
import SecretMessageBracelet2 from "../Img/BraceletsProductsImages/SecretMessageBracelet3.png"
import SecretMessageBracelet3 from "../Img/BraceletsProductsImages/SecretMessageBracelet3.png"
import HeftyBraidedBracelet from "../Img/BraceletsProductsImages/HeftyBraidedBracelet.png"
import HeftyBraidedBracelet2 from "../Img/BraceletsProductsImages/HeftyBraidedBracelet2.png"
import SingleWrapCraftCuff from "../Img/BraceletsProductsImages/SingleWrapCraftCuff.png"
import SingleWrapCraftCuff2 from "../Img/BraceletsProductsImages/SingleWrapCraftCuff2.png"
import MysteryBraidBracelet from "../Img/BraceletsProductsImages/MysteryBraidBracelet.png"
import MysteryBraidBracelet2 from "../Img/BraceletsProductsImages/MysteryBraidBracelet2.png"

import BrassKeyHook from "../Img/KeysKedgeProductsImages/BrassKeyHook.png"
import BrassKeyHook2 from "../Img/KeysKedgeProductsImages/BrassKeyHook2.png"
import BrassKeyHook3 from "../Img/KeysKedgeProductsImages/BrassKeyHook3.png"
import UtilityKeyClip from "../Img/KeysKedgeProductsImages/UtilityKeyClip.png"
import UtilityKeyClip2 from "../Img/KeysKedgeProductsImages/UtilityKeyClip2.png"
import KeyKedge from "../Img/KeysKedgeProductsImages/KeyKedge.png"
import KeyKedge2 from "../Img/KeysKedgeProductsImages/KeyKedge2.png"
import KeyKedge3 from "../Img/KeysKedgeProductsImages/KeyKedge3.png"
import ShortKeyClip from "../Img/KeysKedgeProductsImages/ShortKeyClip.png"
import ShortKeyClip2 from "../Img/KeysKedgeProductsImages/ShortKeyClip2.png"
import TasselKeyChain from "../Img/KeysKedgeProductsImages/TasselKeyChain.png"
import TasselKeyChain2 from "../Img/KeysKedgeProductsImages/TasselKeyChain2.png"
import WoodBrownKeyHolder from "../Img/KeysKedgeProductsImages/WoodBrownKeyHolder.png"
import WoodBrownKeyHolder2 from "../Img/KeysKedgeProductsImages/WoodBrownKeyHolder2.png"
import WoodBrownKeyHolder3 from "../Img/KeysKedgeProductsImages/WoodBrownKeyHolder3.png"
import ReserveKeyStrap from "../Img/KeysKedgeProductsImages/ReserveKeyStrap.png"
import ReserveKeyStrap2 from "../Img/KeysKedgeProductsImages/ReserveKeyStrap2.png"
import DarkBrownKeyHolder from "../Img/KeysKedgeProductsImages/DarkBrownKeyHolder.png"
import DarkBrownKeyHolder2 from "../Img/KeysKedgeProductsImages/DarkBrownKeyHolder2.png"
import DarkBrownKeyHolder3 from "../Img/KeysKedgeProductsImages/DarkBrownKeyHolder3.png"
import WoodBrownKeyOrganizer from "../Img/KeysKedgeProductsImages/WoodBrownKeyOrganizer.png"
import WoodBrownKeyOrganizer2 from "../Img/KeysKedgeProductsImages/WoodBrownKeyOrganizer2.png"
import WoodBrownKeyOrganizer3 from "../Img/KeysKedgeProductsImages/WoodBrownKeyOrganizer3.png"

import BlackFieldNotesCover from "../Img/FieldNotesCoversImg/BlackFieldNotesCover.png"
import BlackFieldNotesCover2 from "../Img/FieldNotesCoversImg/BlackFieldNotesCover2.png"
import NorthswestwardFieldNotes from "../Img/FieldNotesCoversImg/NorthswestwardFieldNotes.png"
import NorthswestwardFieldNotes2 from "../Img/FieldNotesCoversImg/NorthswestwardFieldNotes2.png"
import DakotaFieldNotesCover from "../Img/FieldNotesCoversImg/DakotaFieldNotesCover.png"
import DakotaFieldNotesCover2 from "../Img/FieldNotesCoversImg/DakotaFieldNotesCover2.png"
import DakotaFieldNotesCover3 from "../Img/FieldNotesCoversImg/DakotaFieldNotesCover3.png"
import HorweenFieldNotes from "../Img/FieldNotesCoversImg/HorweenFieldNotes.png"
import HorweenFieldNotes2 from "../Img/FieldNotesCoversImg/HorweenFieldNotes2.png"
import DenverJournalCover from "../Img/FieldNotesCoversImg/DenverJournalCover.png"
import DenverJournalCover2 from "../Img/FieldNotesCoversImg/DenverJournalCover2.png"
import DenverJournalCover3 from "../Img/FieldNotesCoversImg/DenverJournalCover3.png"
import WoodlanderNotebook from "../Img/FieldNotesCoversImg/WoodlanderNotebook.png"
import WoodlanderNotebook2 from "../Img/FieldNotesCoversImg/WoodlanderNotebook2.png"
import LargeDenverJournalCover from "../Img/FieldNotesCoversImg/LargeDenverJournalCover.png"
import LargeDenverJournalCover2 from "../Img/FieldNotesCoversImg/LargeDenverJournalCover2.png"
import LargeDenverJournalCover3 from "../Img/FieldNotesCoversImg/LargeDenverJournalCover3.png"
import CheckBookWallet from "../Img/FieldNotesCoversImg/CheckBookWallet.png"
import CheckBookWallet2 from "../Img/FieldNotesCoversImg/CheckBookWallet2.png"
import CheckBookWallet3 from "../Img/FieldNotesCoversImg/CheckBookWallet3.png"
import NotebookCover from "../Img/FieldNotesCoversImg/NotebookCover.png"
import NotebookCover2 from "../Img/FieldNotesCoversImg/NotebookCover2.png"
import NotebookCover3 from "../Img/FieldNotesCoversImg/NotebookCover3.png"

import DarkWoolFeltPhoneCase from "../Img/PhoneCaseProductsImages/DarkWoolFeltPhoneCase.png"
import DarkWoolFeltPhoneCase2 from "../Img/PhoneCaseProductsImages/DarkWoolFeltPhoneCase2.png"
import DarkWoolFeltPhoneCase3 from "../Img/PhoneCaseProductsImages/DarkWoolFeltPhoneCase3.png"
import DarkPocketPhoneCase from "../Img/PhoneCaseProductsImages/DarkPocketPhoneCase.png"
import DarkPocketPhoneCase2 from "../Img/PhoneCaseProductsImages/DarkPocketPhoneCase2.png"
import DarkPocketPhoneCase3 from "../Img/PhoneCaseProductsImages/DarkPocketPhoneCase3.png"
import MinimalistPhoneCase from "../Img/PhoneCaseProductsImages/MinimalistPhoneCase.png"
import MinimalistPhoneCase2 from "../Img/PhoneCaseProductsImages/MinimalistPhoneCase2.png"
import MinimalistPhoneCase3 from "../Img/PhoneCaseProductsImages/MinimalistPhoneCase3.png"
import DarkMinimalistPhoneCase from "../Img/PhoneCaseProductsImages/DarkMinimalistPhoneCase.png"
import DarkMinimalistPhoneCase2 from "../Img/PhoneCaseProductsImages/DarkMinimalistPhoneCase2.png"
import DarkMinimalistPhoneCase3 from "../Img/PhoneCaseProductsImages/DarkMinimalistPhoneCase3.png"
import DarkIphoneLeatherCase from "../Img/PhoneCaseProductsImages/DarkIphoneLeatherCase.png"
import DarkIphoneLeatherCase2 from "../Img/PhoneCaseProductsImages/DarkIphoneLeatherCase2.png"
import DarkIphoneLeatherCase3 from "../Img/PhoneCaseProductsImages/DarkIphoneLeatherCase3.png"
import IphoneLeatherCase from "../Img/PhoneCaseProductsImages/IphoneLeatherCase.png"
import IphoneLeatherCase2 from "../Img/PhoneCaseProductsImages/IphoneLeatherCase2.png"
import IphoneLeatherCase3 from "../Img/PhoneCaseProductsImages/IphoneLeatherCase3.png"
import TwoIphoneCase from "../Img/PhoneCaseProductsImages/TwoIphoneCase.png"
import TwoIphoneCase2 from "../Img/PhoneCaseProductsImages/TwoIphoneCase2.png"
import TwoIphoneCase3 from "../Img/PhoneCaseProductsImages/TwoIphoneCase3.png"
import LeatherPocketPhoneCase from "../Img/PhoneCaseProductsImages/LeatherPocketPhoneCase.png"
import LeatherPocketPhoneCase2 from "../Img/PhoneCaseProductsImages/LeatherPocketPhoneCase2.png"
import LeatherPocketPhoneCase3 from "../Img/PhoneCaseProductsImages/LeatherPocketPhoneCase3.png"
import DarkTwoIphoneCase from "../Img/PhoneCaseProductsImages/DarkTwoIphoneCase.png"
import DarkTwoIphoneCase2 from "../Img/PhoneCaseProductsImages/DarkTwoIphoneCase2.png"
import DarkTwoIphoneCase3 from "../Img/PhoneCaseProductsImages/DarkTwoIphoneCase3.png"

import NatoWatchStrap from "../Img/WatchStrapsProductsImages/NatoWatchStrap.png"
import NatoWatchStrap2 from "../Img/WatchStrapsProductsImages/NatoWatchStrap2.png"
import DakotaAppleWatchStrap from "../Img/WatchStrapsProductsImages/DakotaAppleWatchStrap.png"
import DakotaAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/DakotaAppleWatchStrap2.png"
import TanAppleWatchStrap from "../Img/WatchStrapsProductsImages/TanAppleWatchStrap.png"
import TanAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/TanAppleWatchStrap2.png"
import TanAppleWatchStrap3 from "../Img/WatchStrapsProductsImages/TanAppleWatchStrap3.png"
import DieselAppleWatchStrap from "../Img/WatchStrapsProductsImages/DieselAppleWatchStrap.png"
import DieselAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/DieselAppleWatchStrap2.png"
import BrownAppleWatchStrap from "../Img/WatchStrapsProductsImages/BrownAppleWatchStrap.png"
import BrownAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/BrownAppleWatchStrap2.png"
import HoneyAppleWatchStrap from "../Img/WatchStrapsProductsImages/HoneyAppleWatchStrap.png"
import HoneyAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/HoneyAppleWatchStrap2.png"
import HoneyAppleWatchStrap3 from "../Img/WatchStrapsProductsImages/HoneyAppleWatchStrap3.png"
import NatoAppleWatchStrap from "../Img/WatchStrapsProductsImages/NatoAppleWatchStrap.png"
import NatoAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/NatoAppleWatchStrap2.png"
import NatoAppleWatchStrap3 from "../Img/WatchStrapsProductsImages/NatoAppleWatchStrap3.png"
import AmberAppleWatchStrap from "../Img/WatchStrapsProductsImages/AmberAppleWatchStrap.png"
import AmberAppleWatchStrap2 from "../Img/WatchStrapsProductsImages/AmberAppleWatchStrap2.png"
import AmberAppleWatchStrap3 from "../Img/WatchStrapsProductsImages/AmberAppleWatchStrap3.png"
import SaddleTanWatchStrap from "../Img/WatchStrapsProductsImages/SaddleTanWatchStrap.png"
import SaddleTanWatchStrap2 from "../Img/WatchStrapsProductsImages/SaddleTanWatchStrap2.png"

import LeatherSunglassCase from "../Img/AccessoriesProductsImages/LeatherSunglassCase.png"
import LeatherSunglassCase2 from "../Img/AccessoriesProductsImages/LeatherSunglassCase2.png"
import LeatherCameraStrap from "../Img/AccessoriesProductsImages/LeatherCameraStrap.png"
import LeatherCameraStrap2 from "../Img/AccessoriesProductsImages/LeatherCameraStrap2.png"
import LeatherCoasterSet from "../Img/AccessoriesProductsImages/LeatherCoasterSet.png"
import LeatherCoasterSet2 from "../Img/AccessoriesProductsImages/LeatherCoasterSet2.png"
import LeatherPartsBag from "../Img/AccessoriesProductsImages/LeatherPartsBag.png"
import LeatherPartsBag2 from "../Img/AccessoriesProductsImages/LeatherPartsBag2.png"
import LeatherPartsBag3 from "../Img/AccessoriesProductsImages/LeatherPartsBag3.png"
import LighterSleeve from "../Img/AccessoriesProductsImages/LighterSleeve.png"
import LighterSleeve2 from "../Img/AccessoriesProductsImages/LighterSleeve2.png"
import TravelValetTray from "../Img/AccessoriesProductsImages/TravelValetTray.png"
import TravelValetTray2 from "../Img/AccessoriesProductsImages/TravelValetTray2.png"
import ValetTray from "../Img/AccessoriesProductsImages/ValetTray.png"
import ValetTray2 from "../Img/AccessoriesProductsImages/ValetTray2.png"
import LeatherGuitarStrap from "../Img/AccessoriesProductsImages/LeatherGuitarStrap.png"
import LeatherGuitarStrap2 from "../Img/AccessoriesProductsImages/LeatherGuitarStrap2.png"
import LeatherWaistBag from "../Img/AccessoriesProductsImages/LeatherWaistBag.png"
import LeatherWaistBag2 from "../Img/AccessoriesProductsImages/LeatherWaistBag2.png"
import LeatherWaistBag3 from "../Img/AccessoriesProductsImages/LeatherWaistBag3.png"

import BuffaloJackson from "../Img/PartnersImages/BuffaloJackson.svg";


const arr = [

    {
        id: "dakota-bifold-wallet",
        image: DakotaBifoldWallet,
        image2: DakotaBifoldWallet2,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Dakota Bifold Wallet",
        productCost: "$ 84.95",
        type: "wallets"
    },
    {
        id: "insider-wallet",
        image: InsiderWallet,
        image2: InsiderWallet2,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Insider Leather Wallet",
        productCost: "$ 65.00",
        type: "wallets"
    },
    {
        id: "ryder-reserve-bison-wallet",
        image: RyderReserveBisonWallet,
        image2: RyderReserveBisonWallet2,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Bison Wallet",
        productCost: "$ 49.95",
        type: "wallets"
    },
    {
        id: "chelsea-leather-wallet",
        image: ChelseaLeatherClutch,
        image2: ChelseaLeatherClutch2,
        image3: ChelseaLeatherClutch3,
        brandImage: BuffaloJackson,
        productColor: "Honey Brown",
        productName: "Chelsea Leather Clutch",
        productCost: "$ 139.95",
        type: "wallets"
    },
    {
        id: "madison-checkbook-wallet",
        image: MadisonCheckbookWallet,
        image2: MadisonCheckbookWallet2,
        image3: MadisonCheckbookWallet3,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Madison Checkbook Wallet",
        productCost: "$ 109.70",
        type: "wallets"
    },
    {
        id: "madison-wristlet-wallet",
        image: MadisonWristletWallet,
        image2: MadisonWristletWallet2,
        image3: MadisonWristletWallet3,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Madison Wristlet Wallet",
        productCost: "$ 124.90",
        type: "wallets"
    },
    {
        id: "ryder-reserve-trifold-wallet",
        image: RyderReserveTrifoldWallet,
        image2: RyderReserveTrifoldWallet2,
        image3: RyderReserveTrifoldWallet3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Trifold Wallet",
        productCost: "$ 99.95",
        type: "wallets"
    },
    {
        id: "enfold-fullsize-wallet",
        image: EnfoldFullsizeWallet,
        image2: EnfoldFullsizeWallet2,
        image3: EnfoldFullsizeWallet3,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Enfold Fullsize Wallet",
        productCost: "$ 70.55",
        type: "wallets"
    },
    {
        id: "denver-billfold-wallet",
        image: DenverBillfoldWallet,
        image2: DenverBillfoldWallet2,
        brandImage: BuffaloJackson,
        productColor: "Autumn Brown",
        productName: "Denver Billfold Wallet",
        productCost: "$ 84.95",
        type: "wallets"
    },
    {
        id: "denver-travel-duffle-bag",
        image: DenverTravelDuffleBag,
        image2: DenverTravelDuffleBag2,
        image3: DenverTravelDuffleBag3,
        brandImage: BuffaloJackson,
        productColor: "Dark Briar",
        productName: "Denver Travel Duffle Bag",
        productCost: "$ 399.95",
        type: "bags"
    },
    {
        id: "ryder-reserve-travel-duffle-bag",
        image: RyderReserveTravelDuffleBag,
        image2: RyderReserveTravelDuffleBag2,
        image3: RyderReserveTravelDuffleBag3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Travel Duffle Bag",
        productCost: "$ 549.95",
        type: "bags"
    },
    {
        id: "camden-braided-tote",
        image: CamdenBraidedTote,
        image2: CamdenBraidedTote2,
        image3: CamdenBraidedTote3,
        brandImage: BuffaloJackson,
        productColor: "Hickory",
        productName: "Camden Braided Tote",
        productCost: "$ 224.94",
        type: "bags"
    },
    {
        id: "madison-tote",
        image: MadisonTote,
        image2: MadisonTote2,
        image3: MadisonTote3,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Leather Madison Tote",
        productCost: "$ 225.95",
        type: "bags"
    },
    {
        id: "ryder-reserve-laptop-briefcase",
        image: RyderReserveLaptopBriefcase,
        image2: RyderReserveLaptopBriefcase2,
        image3: RyderReserveLaptopBriefcase3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Laptop Briefcase",
        productCost: "$ 449.95",
        type: "bags"
    },
    {
        id: "roosevelt-buffalo-messenger-bag",
        image: RooseveltBuffaloMessengerBag,
        image2: RooseveltBuffaloMessengerBag2,
        image3: RooseveltBuffaloMessengerBag3,
        brandImage: BuffaloJackson,
        productColor: "Dark Oak",
        productName: "Roosevelt Buffalo Messenger Bag",
        productCost: "$ 299.95",
        type: "bags"
    },
    {
        id: "walker-tote",
        image: WalkerTote,
        image2: WalkerTote2,
        image3: WalkerTote3,
        brandImage: BuffaloJackson,
        productColor: "Rustic TAN",
        productName: "Leather Walker Tote",
        productCost: "$ 239.95",
        type: "bags"
    },
    {
        id: "walker-small-backpack",
        image: WalkerSmallBackpack,
        image2: WalkerSmallBackpack2,
        image3: WalkerSmallBackpack3,
        brandImage: BuffaloJackson,
        productColor: "Rustic TAN",
        productName: "Walker Small Backpack",
        productCost: "$ 199.95",
        type: "bags"
    },
    {
        id: "walker-leather-backpack",
        image: WalkerLeatherBackpack,
        image2: WalkerLeatherBackpack2,
        image3: WalkerLeatherBackpack3,
        brandImage: BuffaloJackson,
        productColor: "Rustic Tan",
        productName: "Walker Leather Backpack",
        productCost: "$ 299.95",
        type: "bags"
    },
    {
        id: "craft-belt-brown",
        image: CraftBeltBrown,
        image2: CraftBeltBrown2,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Craft Belt",
        productCost: "$ 110.00",
        type: "belts"
    },
    {
        id: "mountain-belt-dark-brown",
        image: MountainBeltDarkBrown,
        image2: MountainBeltDarkBrown2,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Mountain Belt",
        productCost: "$ 135.00",
        type: "belts"
    },
    {
        id: "blackout-belt",
        image: BlackoutBelt,
        image2: BlackoutBelt2,
        image3: BlackoutBelt3,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Blackout Belt",
        productCost: "$ 115.00",
        type: "belts"
    },
    {
        id: "craft-belt-olive",
        image: CraftBeltOlive,
        image2: CraftBeltOlive2,
        image3: CraftBeltOlive3,
        brandImage: BuffaloJackson,
        productColor: "Olive",
        productName: "Craft Belt",
        productCost: "$ 120.00",
        type: "belts"
    },
    {
        id: "craft-belt-black",
        image: CraftBeltBlack,
        image2: CraftBeltBlack2,
        image3: CraftBeltBlack3,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Craft Belt",
        productCost: "$ 115.00",
        type: "belts"
    },
    {
        id: "stockton-belt",
        image: StocktonBelt,
        image2: StocktonBelt2,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Stockton Belt",
        productCost: "$ 125.90",
        type: "belts"
    },
    {
        id: "heritage-belt",
        image: HeritageBelt,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Heritage Belt",
        productCost: "$ 95.25",
        type: "belts"
    },
    {
        id: "craftBelt-natural",
        image: CraftBeltNatural,
        image2: CraftBeltNatural2,
        image3: CraftBeltNatural3,
        brandImage: BuffaloJackson,
        productColor: "Natural",
        productName: "Craft Belt",
        productCost: "$ 110.00",
        type: "belts"
    },
    {
        id: "mountain-belt-russet",
        image: MountainBeltRusset,
        image2: MountainBeltRusset2,
        image3: MountainBeltRusset3,
        brandImage: BuffaloJackson,
        productColor: "Russet",
        productName: "Mountain Belt",
        productCost: "$ 135.95",
        type: "belts"
    },
    {
        id: "personalized-bracelet",
        image: PersonalizedBracelet,
        image2: PersonalizedBracelet2,
        image3: PersonalizedBracelet3,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Personalized Leather Bracelet",
        productCost: "$ 35.90",
        type: "bracelets"
    },
    {
        id: "double-wrap-mountain-cuff",
        image: DoubleWrapMountainCuff,
        image2: DoubleWrapMountainCuff2,
        image3: DoubleWrapMountainCuff3,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Double Wrap Mountain Cuff",
        productCost: "$ 40.00",
        type: "bracelets"
    },
    {
        id: "knot-bracelet",
        image: KnotBracelet,
        image2: KnotBracelet2,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Brown",
        productName: "Leather Knot Bracelet",
        productCost: "$ 30.50",
        type: "bracelets"
    },
    {
        id: "strappy-wrap-bracelet",
        image: StrappyWrapBracelet,
        image2: StrappyWrapBracelet2,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Strappy Wrap Bracelet",
        productCost: "$ 30.15",
        type: "bracelets"
    },
    {
        id: "simple-adjustable-cuff",
        image: SimpleAdjustableCuff,
        image2: SimpleAdjustableCuff2,
        brandImage: BuffaloJackson,
        productColor: "Black & Brown",
        productName: "Simple Adjustable Cuff",
        productCost: "$ 30.45",
        type: "bracelets"
    },
    {
        id: "secret-message-bracelet",
        image: SecretMessageBracelet,
        image2: SecretMessageBracelet2,
        image3: SecretMessageBracelet3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Secret Message Bracelet",
        productCost: "$ 45.90",
        type: "bracelets"
    },
    {
        id: "hefty-braided-bracelet",
        image: HeftyBraidedBracelet,
        image2: HeftyBraidedBracelet2,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Hefty Braided Bracelet",
        productCost: "$ 42.40",
        type: "bracelets"
    },
    {
        id: "single-wrap-craft-cuff",
        image: SingleWrapCraftCuff,
        image2: SingleWrapCraftCuff2,
        brandImage: BuffaloJackson,
        productColor: "Brown & Black",
        productName: "Single Wrap Craft Cuff",
        productCost: "$ 27.00",
        type: "bracelets"
    },
    {
        id: "mystery-braid-bracelet",
        image: MysteryBraidBracelet,
        image2: MysteryBraidBracelet2,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Mystery Braid Bracelet",
        productCost: "$ 25.00",
        type: "bracelets"
    },
    {
        id: "brass-key-hook",
        image: BrassKeyHook,
        image2: BrassKeyHook2,
        image3: BrassKeyHook3,
        brandImage: BuffaloJackson,
        productColor: "Light Tan",
        productName: "Brass Key Hook",
        productCost: "$ 25.00",
        type: "keykedges"
    },
    {
        id: "utility-key-clip",
        image: UtilityKeyClip,
        image2: UtilityKeyClip2,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Utility Key Clip",
        productCost: "$ 30.00",
        type: "keykedges"
    },
    {
        id: "key-kedge",
        image: KeyKedge,
        image2: KeyKedge2,
        image3: KeyKedge3,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Tan",
        productName: "Leather Key Kedge",
        productCost: "$ 35.00",
        type: "keykedges"
    },
    {
        id: "short-key-clip",
        image: ShortKeyClip,
        image2: ShortKeyClip2,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Short Key Clip",
        productCost: "$ 28.00",
        type: "keykedges"
    },
    {
        id: "tassel-key-chain",
        image: TasselKeyChain,
        image2: TasselKeyChain2,
        brandImage: BuffaloJackson,
        productColor: "Dark Tan",
        productName: "Tassel Key Chain",
        productCost: "$ 25.00",
        type: "keykedges"
    },
    {
        id: "wood-brown-key-holder",
        image: WoodBrownKeyHolder,
        image2: WoodBrownKeyHolder2,
        image3: WoodBrownKeyHolder3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Wood Brown Key Holder",
        productCost: "$ 32.30",
        type: "keykedges"
    },
    {
        id: "reserve-key-strap",
        image: ReserveKeyStrap,
        image2: ReserveKeyStrap2,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Reserve Key Strap",
        productCost: "$ 24.95",
        type: "keykedges"
    },
    {
        id: "dark-brown-key-holder",
        image: DarkBrownKeyHolder,
        image2: DarkBrownKeyHolder2,
        image3: DarkBrownKeyHolder3,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Dark Brown Key Holder",
        productCost: "$ 32.10",
        type: "keykedges"
    },
    {
        id: "wood-brown-key-organizer",
        image: WoodBrownKeyOrganizer,
        image2: WoodBrownKeyOrganizer2,
        image3: WoodBrownKeyOrganizer3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Wood Brown Key Organizer",
        productCost: "$ 25.00",
        type: "keykedges"
    },
    {
        id: "black-field-notes-cover",
        image: BlackFieldNotesCover,
        image2: BlackFieldNotesCover2,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Black Field Notes Cover",
        productCost: "$ 54.99",
        type: "fieldsNotesCovers"
    },
    {
        id: "northswestward-field-notes",
        image: NorthswestwardFieldNotes,
        image2: NorthswestwardFieldNotes2,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Northswestward Field Notes",
        productCost: "$ 81.90",
        type: "fieldsNotesCovers"
    },
    {
        id: "dakota-field-notes-cover",
        image: DakotaFieldNotesCover,
        image2: DakotaFieldNotesCover2,
        image3: DakotaFieldNotesCover3,
        brandImage: BuffaloJackson,
        productColor: "Chestnut Brown",
        productName: "Dakota Field Notes Cover",
        productCost: "$ 99.95",
        type: "fieldsNotesCovers"
    },
    {
        id: "horween-field-notes",
        image: HorweenFieldNotes,
        image2: HorweenFieldNotes2,
        brandImage: BuffaloJackson,
        productColor: "Gray Brown",
        productName: "Horween Field Notes",
        productCost: "$ 100.00",
        type: "fieldsNotesCovers"
    },
    {
        id: "denver-journal-cover",
        image: DenverJournalCover,
        image2: DenverJournalCover2,
        image3: DenverJournalCover3,
        brandImage: BuffaloJackson,
        productColor: "Autumn Brown",
        productName: "Denver Journal Cover",
        productCost: "$ 74.95",
        type: "fieldsNotesCovers"
    },
    {
        id: "woodlander-notebook",
        image: WoodlanderNotebook,
        image2: WoodlanderNotebook2,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Woodlander Leather Notebook",
        productCost: "$ 94.95",
        type: "fieldsNotesCovers"
    },
    {
        id: "large-denver-journal-cover",
        image: LargeDenverJournalCover,
        image2: LargeDenverJournalCover2,
        image3: LargeDenverJournalCover3,
        brandImage: BuffaloJackson,
        productColor: "Dark Briar",
        productName: "Large Denver Journal Cover",
        productCost: "$ 84.70",
        type: "fieldsNotesCovers"
    },
    {
        id: "check-book-wallet",
        image: CheckBookWallet,
        image2: CheckBookWallet2,
        image3: CheckBookWallet3,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "CheckBook Leather Wallet",
        productCost: "$ 254.00",
        type: "fieldsNotesCovers"
    },
    {
        id: "notebook-cover",
        image: NotebookCover,
        image2: NotebookCover2,
        image3: NotebookCover3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Leather Notebook Cover",
        productCost: "$ 184.95",
        type: "fieldsNotesCovers"
    },
    {
        id: "dark-wool-felt-phone-case",
        image: DarkWoolFeltPhoneCase,
        image2: DarkWoolFeltPhoneCase2,
        image3: DarkWoolFeltPhoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Wool Felt Phone Case",
        productCost: "$ 44.95",
        type: "phoneCases"
    },
    {
        id: "dark-pocket-phone-case",
        image: DarkPocketPhoneCase,
        image2: DarkPocketPhoneCase2,
        image3: DarkPocketPhoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Dark Pocket Phone Case",
        productCost: "$ 42.50",
        type: "phoneCases"
    },
    {
        id: "minimalist-phone-case",
        image: MinimalistPhoneCase,
        image2: MinimalistPhoneCase2,
        image3: MinimalistPhoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Minimalist Phone Case",
        productCost: "$ 54.70",
        type: "phoneCases"
    },
    {
        id: "dark-minimalist-phone-case",
        image: DarkMinimalistPhoneCase,
        image2: DarkMinimalistPhoneCase2,
        image3: DarkMinimalistPhoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Minimalist Phone Case",
        productCost: "$ 54.70",
        type: "phoneCases"
    },
    {
        id: "dark-iphone-leather-case",
        image: DarkIphoneLeatherCase,
        image2: DarkIphoneLeatherCase2,
        image3: DarkIphoneLeatherCase3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Iphone Leather Case",
        productCost: "$ 44.95",
        type: "phoneCases"
    },
    {
        id: "two-iphone-case",
        image: TwoIphoneCase,
        image2: TwoIphoneCase2,
        image3: TwoIphoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Two Iphone Case",
        productCost: "$ 67.85",
        type: "phoneCases"
    },
    {
        id: "iphone-leather-case",
        image: IphoneLeatherCase,
        image2: IphoneLeatherCase2,
        image3: IphoneLeatherCase3,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Iphone Leather Case",
        productCost: "$ 44.95",
        type: "phoneCases"
    },
    {
        id: "leather-pocket-phone-case",
        image: LeatherPocketPhoneCase,
        image2: LeatherPocketPhoneCase2,
        image3: LeatherPocketPhoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Leather Pocket Phone Case",
        productCost: "$ 42.50",
        type: "phoneCases"
    },
    {
        id: "dark-two-iphone-case",
        image: DarkTwoIphoneCase,
        image2: DarkTwoIphoneCase2,
        image3: DarkTwoIphoneCase3,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Two Iphone Case",
        productCost: "$ 67.85",
        type: "phoneCases"
    },
    {
        id: "nato-watch-strap",
        image: NatoWatchStrap,
        image2: NatoWatchStrap2,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Nato Watch Strap",
        productCost: "$ 95.00",
        type: "watchStraps"
    },
    {
        id: "dakota-apple-watch-strap",
        image: DakotaAppleWatchStrap,
        image2: DakotaAppleWatchStrap2,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Dakota Apple Watch Strap",
        productCost: "$ 104.95",
        type: "watchStraps"
    },
    {
        id: "tan-apple-watch-strap",
        image: TanAppleWatchStrap,
        image2: TanAppleWatchStrap2,
        image3: TanAppleWatchStrap3,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Tan Apple Watch Strap",
        productCost: "$ 97.95",
        type: "watchStraps"
    },
    {
        id: "diesel-apple-watch-strap",
        image: DieselAppleWatchStrap,
        image2: DieselAppleWatchStrap2,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Diesel Apple Watch Strap",
        productCost: "$ 110.00",
        type: "watchStraps"
    },
    {
        id: "nato-apple-watch-strap",
        image: NatoAppleWatchStrap,
        image2: NatoAppleWatchStrap2,
        image3: NatoAppleWatchStrap3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Nato Apple Watch Strap",
        productCost: "$ 114.95",
        type: "watchStraps"
    },
    {
        id: "honey-apple-watch-strap",
        image: HoneyAppleWatchStrap,
        image2: HoneyAppleWatchStrap2,
        image3: HoneyAppleWatchStrap3,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Honey Apple Watch Strap",
        productCost: "$ 95.30",
        type: "watchStraps"
    },
    {
        id: "saddle-apple-watch-strap",
        image: SaddleTanWatchStrap,
        image2: SaddleTanWatchStrap2,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Saddle Tan Watch Strap",
        productCost: "$ 200.00",
        type: "watchStraps"
    },
    {
        id: "amber-apple-watch-strap",
        image: AmberAppleWatchStrap,
        image2: AmberAppleWatchStrap2,
        image3: AmberAppleWatchStrap3,
        brandImage: BuffaloJackson,
        productColor: "Amber",
        productName: "Amber Apple Watch Strap",
        productCost: "$ 94.70",
        type: "watchStraps"
    },
    {
        id: "brown-appleWatch-strap",
        image: BrownAppleWatchStrap,
        image2: BrownAppleWatchStrap2,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Brown Apple Watch Strap",
        productCost: "$ 99.95",
        type: "watchStraps"
    },
    {
        id: "leather-camera-strap",
        image: LeatherCameraStrap,
        image2: LeatherCameraStrap2,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Leather Camera Strap",
        productCost: "$ 85.00",
        type: "accessories"
    },
    {
        id: "leather-sunglass-case",
        image: LeatherSunglassCase,
        image2: LeatherSunglassCase2,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Leather Sunglass Case",
        productCost: "$ 85.75",
        type: "accessories"
    },
    {
        id: "leather-coaster-set",
        image: LeatherCoasterSet,
        image2: LeatherCoasterSet2,
        brandImage: BuffaloJackson,
        productColor: "Black & Brown",
        productName: "Leather Coaster Set",
        productCost: "$ 85.00",
        type: "accessories"
    },
    {
        id: "leather-parts-bag",
        image: LeatherPartsBag,
        image2: LeatherPartsBag2,
        image3: LeatherPartsBag3,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Leather Parts Bag",
        productCost: "$ 65.95",
        type: "accessories"
    },
    {
        id: "lighter-sleeve",
        image: LighterSleeve,
        image2: LighterSleeve2,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Brown",
        productName: "Leather Lighter Sleeve",
        productCost: "$ 30.00",
        type: "accessories"
    },
    {
        id: "travel-valet-tray",
        image: TravelValetTray,
        image2: TravelValetTray2,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Travel Valet Tray",
        productCost: "$ 45.00",
        type: "accessories"
    },
    {
        id: "valet-tray",
        image: ValetTray,
        image2: ValetTray2,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Leather Valet Tray",
        productCost: "$ 35.00",
        type: "accessories"
    },
    {
        id: "leather-guitarStrap",
        image: LeatherGuitarStrap,
        image2: LeatherGuitarStrap2,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Leather Guitar Strap",
        productCost: "$ 85.95",
        type: "accessories"
    },
    {
        id: "leather-waistBag",
        image: LeatherWaistBag,
        image2: LeatherWaistBag2,
        image3: LeatherWaistBag3,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Leather Waist Bag",
        productCost: "$ 175.00",
        type: "accessories"
    },
  ]

function Products() {
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8000/products/');
        console.log(result.data)
        setProducts(result.data)}

    useEffect(() => {fetchProducts();}, [])

    const {id, link} = useParams();

    let testArr = [];
    let testArray = [];

    let array = products.filter((obj) => obj.slug == id);
    let arrayed = products.filter((obj) => obj.category == link);

    testArr.push(array);
    testArray.push(arrayed);

    console.log(array);

    return (

        <Container fluid style={{backgroundColor: "#110B09"}} className="py-5 my-5">
            <Container style={{width: "60%"}} className="d-flex justify-content-center py-5">
                <div style={{width: "50%", height: "100%"}} className="px-3">

                </div>
                <div>
                    {array.map((obj)=>(
                        <PageProductsTitle
                            key={obj.id}
                            imageProduct={obj.photo}
                            imageProduct2={obj.photo2}
                            colorProduct={obj.color}
                            nameProduct={obj.name}
                            costProduct={obj.price}
                        />
                    ))}
                </div>
            </Container>
        </Container>
    )

}

export default Products