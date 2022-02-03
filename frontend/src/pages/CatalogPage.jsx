import React from "react";
import { Button, Container, Dropdown, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import "../scss/wallets.scss"

import Cards from "../components/Cards"

import DakotaBifoldWallet from "../Img/WalletProductsImages/DakotaBifoldWallet.png"
import InsiderWallet from "../Img/WalletProductsImages/InsiderWallet.png"
import RyderReserveBisonWallet from "../Img/WalletProductsImages/RyderReserveBisonWallet.png"
import ChelseaLeatherClutch from "../Img/WalletProductsImages/ChelseaLeatherClutch.png"
import MadisonCheckbookWallet from "../Img/WalletProductsImages/MadisonCheckbookWallet.png"
import MadisonWristletWallet from "../Img/WalletProductsImages/MadisonWristletWallet.png"
import RyderReserveTrifoldWallet from "../Img/WalletProductsImages/RyderReserveTrifoldWallet.png"
import EnfoldFullsizeWallet from "../Img/WalletProductsImages/EnfoldFullsizeWallet.png"
import DenverBillfoldWallet from "../Img/WalletProductsImages/DenverBillfoldWallet.png"

import DenverTravelDuffleBag from "../Img/BagProductsImages/DenverTravelDuffleBag.png"
import RyderReserveTravelDuffleBag from "../Img/BagProductsImages/RyderReserveTravelDuffleBag.png"
import CamdenBraidedTote from "../Img/BagProductsImages/CamdenBraidedTote.png"
import MadisonTote from "../Img/BagProductsImages/MadisonTote.png"
import RyderReserveLaptopBriefcase from "../Img/BagProductsImages/RyderReserveLaptopBriefcase.png"
import RooseveltBuffaloMessengerBag from "../Img/BagProductsImages/RooseveltBuffaloMessengerBag.png"
import WalkerTote from "../Img/BagProductsImages/WalkerTote.png"
import WalkerSmallBackpack from "../Img/BagProductsImages/WalkerSmallBackpack.png"
import WalkerLeatherBackpack from "../Img/BagProductsImages/WalkerLeatherBackpack.png"

import CraftBeltBrown from "../Img/BeltsProductsImages/CraftBeltBrown.png"
import MountainBeltDarkBrown from "../Img/BeltsProductsImages/MountainBeltDarkBrown.png"
import BlackoutBelt from "../Img/BeltsProductsImages/BlackoutBelt.png"
import CraftBeltOlive from "../Img/BeltsProductsImages/CraftBeltOlive.png"
import CraftBeltBlack from "../Img/BeltsProductsImages/CraftBeltBlack.png"
import StocktonBelt from "../Img/BeltsProductsImages/StocktonBelt.png"
import HeritageBelt from "../Img/BeltsProductsImages/HeritageBelt.png"
import CraftBeltNatural from "../Img/BeltsProductsImages/CraftBeltNatural.png"
import MountainBeltRusset from "../Img/BeltsProductsImages/MountainBeltRusset.png"

import PersonalizedBracelet from "../Img/BraceletsProductsImages/PersonalizedBracelet.png"
import DoubleWrapMountainCuff from "../Img/BraceletsProductsImages/DoubleWrapMountainCuff.png"
import KnotBracelet from "../Img/BraceletsProductsImages/KnotBracelet.png"
import StrappyWrapBracelet from "../Img/BraceletsProductsImages/StrappyWrapBracelet.png"
import SimpleAdjustableCuff from "../Img/BraceletsProductsImages/SimpleAdjustableCuff.png"
import SecretMessageBracelet from "../Img/BraceletsProductsImages/SecretMessageBracelet.png"
import HeftyBraidedBracelet from "../Img/BraceletsProductsImages/HeftyBraidedBracelet.png"
import SingleWrapCraftCuff from "../Img/BraceletsProductsImages/SingleWrapCraftCuff.png"
import MysteryBraidBracelet from "../Img/BraceletsProductsImages/MysteryBraidBracelet.png"

import BrassKeyHook from "../Img/KeysKedgeProductsImages/BrassKeyHook.png"
import UtilityKeyClip from "../Img/KeysKedgeProductsImages/UtilityKeyClip.png"
import KeyKedge from "../Img/KeysKedgeProductsImages/KeyKedge.png"
import ShortKeyClip from "../Img/KeysKedgeProductsImages/ShortKeyClip.png"
import TasselKeyChain from "../Img/KeysKedgeProductsImages/TasselKeyChain.png"
import WoodBrownKeyHolder from "../Img/KeysKedgeProductsImages/WoodBrownKeyHolder.png"
import ReserveKeyStrap from "../Img/KeysKedgeProductsImages/ReserveKeyStrap.png"
import DarkBrownKeyHolder from "../Img/KeysKedgeProductsImages/DarkBrownKeyHolder.png"
import WoodBrownKeyOrganizer from "../Img/KeysKedgeProductsImages/WoodBrownKeyOrganizer.png"

import BlackFieldNotesCover from "../Img/FieldNotesCoversImg/BlackFieldNotesCover.png"
import NorthswestwardFieldNotes from "../Img/FieldNotesCoversImg/NorthswestwardFieldNotes.png"
import DakotaFieldNotesCover from "../Img/FieldNotesCoversImg/DakotaFieldNotesCover.png"
import HorweenFieldNotes from "../Img/FieldNotesCoversImg/HorweenFieldNotes.png"
import DenverJournalCover from "../Img/FieldNotesCoversImg/DenverJournalCover.png"
import WoodlanderNotebook from "../Img/FieldNotesCoversImg/WoodlanderNotebook.png"
import LargeDenverJournalCover from "../Img/FieldNotesCoversImg/LargeDenverJournalCover.png"
import CheckBookWallet from "../Img/FieldNotesCoversImg/CheckBookWallet.png"
import NotebookCover from "../Img/FieldNotesCoversImg/NotebookCover.png"

import DarkWoolFeltPhoneCase from "../Img/PhoneCaseProductsImages/DarkWoolFeltPhoneCase.png"
import DarkPocketPhoneCase from "../Img/PhoneCaseProductsImages/DarkPocketPhoneCase.png"
import MinimalistPhoneCase from "../Img/PhoneCaseProductsImages/MinimalistPhoneCase.png"
import DarkMinimalistPhoneCase from "../Img/PhoneCaseProductsImages/DarkMinimalistPhoneCase.png"
import DarkIphoneLeatherCase from "../Img/PhoneCaseProductsImages/DarkIphoneLeatherCase.png"
import IphoneLeatherCase from "../Img/PhoneCaseProductsImages/IphoneLeatherCase.png"
import TwoIphoneCase from "../Img/PhoneCaseProductsImages/TwoIphoneCase.png"
import LeatherPocketPhoneCase from "../Img/PhoneCaseProductsImages/LeatherPocketPhoneCase.png"
import DarkTwoIphoneCase from "../Img/PhoneCaseProductsImages/DarkTwoIphoneCase.png"

import NatoWatchStrap from "../Img/WatchStrapsProductsImages/NatoWatchStrap.png"
import DakotaAppleWatchStrap from "../Img/WatchStrapsProductsImages/DakotaAppleWatchStrap.png"
import TanAppleWatchStrap from "../Img/WatchStrapsProductsImages/TanAppleWatchStrap.png"
import DieselAppleWatchStrap from "../Img/WatchStrapsProductsImages/DieselAppleWatchStrap.png"
import BrownAppleWatchStrap from "../Img/WatchStrapsProductsImages/BrownAppleWatchStrap.png"
import HoneyAppleWatchStrap from "../Img/WatchStrapsProductsImages/HoneyAppleWatchStrap.png"
import NatoAppleWatchStrap from "../Img/WatchStrapsProductsImages/NatoAppleWatchStrap.png"
import AmberAppleWatchStrap from "../Img/WatchStrapsProductsImages/AmberAppleWatchStrap.png"
import BlackAppleWatchStrap from "../Img/WatchStrapsProductsImages/BlackAppleWatchStrap.png"

import LeatherSunglassCase from "../Img/AccessoriesProductsImages/LeatherSunglassCase.png"
import LeatherCameraStrap from "../Img/AccessoriesProductsImages/LeatherCameraStrap.png"
import LeatherCoasterSet from "../Img/AccessoriesProductsImages/LeatherCoasterSet.png"
import LeatherPartsBag from "../Img/AccessoriesProductsImages/LeatherPartsBag.png"
import LighterSleeve from "../Img/AccessoriesProductsImages/LighterSleeve.png"
import TravelValetTray from "../Img/AccessoriesProductsImages/TravelValetTray.png"
import ValetTray from "../Img/AccessoriesProductsImages/ValetTray.png"
import LeatherGuitarStrap from "../Img/AccessoriesProductsImages/LeatherGuitarStrap.png"
import LeatherWaistBag from "../Img/AccessoriesProductsImages/LeatherWaistBag.png"

import BuffaloJackson from "../Img/PartnersImages/BuffaloJackson.svg";

import BannerConstruct from "../components/Banners";

const arr = [

    {
        id: "dakota-bifold-wallet",
        image: DakotaBifoldWallet,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Dakota Bifold Wallet",
        productCost: "$ 84.95",
        type: "wallets"
    },
    {
        id: "insider-wallet",
        image: InsiderWallet,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Insider Leather Wallet",
        productCost: "$ 65.00",
        type: "wallets"
    },
    {
        id: "ryder-reserve-bison-wallet",
        image: RyderReserveBisonWallet,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Bison Wallet",
        productCost: "$ 49.95",
        type: "bags"
    },
    {
        id: "chelsea-leather-wallet",
        image: ChelseaLeatherClutch,
        brandImage: BuffaloJackson,
        productColor: "Honey Brown",
        productName: "Chelsea Leather Clutch",
        productCost: "$ 139.95",
        type: "bags"
    },
    {
        id: "madison-checkbook-wallet",
        image: MadisonCheckbookWallet,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Madison Checkbook Wallet",
        productCost: "$ 109.70"
    },
    {
        id: "madison-wristlet-wallet",
        image: MadisonWristletWallet,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Madison Wristlet Wallet",
        productCost: "$ 124.90"
    },
    {
        id: "ryder-reserve-trifold-wallet",
        image: RyderReserveTrifoldWallet,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Trifold Wallet",
        productCost: "$ 99.95"
    },
    {
        id: "enfold-fullsize-wallet",
        image: EnfoldFullsizeWallet,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Enfold Fullsize Wallet",
        productCost: "$ 70.55"
    },
    {
        id: "denver-billfold-wallet",
        image: DenverBillfoldWallet,
        brandImage: BuffaloJackson,
        productColor: "Autumn Brown",
        productName: "Denver Billfold Wallet",
        productCost: "$ 84.95"
    },
    {
        id: "denver-travel-duffle-bag",
        image: DenverTravelDuffleBag,
        brandImage: BuffaloJackson,
        productColor: "Dark Briar",
        productName: "Denver Travel Duffle Bag",
        productCost: "$ 399.95"
    },
    {
        id: "ryder-reserve-travel-duffle-bag",
        image: RyderReserveTravelDuffleBag,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Travel Duffle Bag",
        productCost: "$ 549.95"
    },
    {
        id: "camden-braided-tote",
        image: CamdenBraidedTote,
        brandImage: BuffaloJackson,
        productColor: "Hickory",
        productName: "Camden Braided Tote",
        productCost: "$ 224.94"
    },
    {
        id: "madison-tote",
        image: MadisonTote,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Leather Madison Tote",
        productCost: "$ 225.95"
    },
    {
        id: "ryder-reserve-laptop-briefcase",
        image: RyderReserveLaptopBriefcase,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Ryder Reserve Laptop Briefcase",
        productCost: "$ 449.95"
    },
    {
        id: "roosevelt-buffalo-messenger-bag",
        image: RooseveltBuffaloMessengerBag,
        brandImage: BuffaloJackson,
        productColor: "Dark Oak",
        productName: "Roosevelt Buffalo Messenger Bag",
        productCost: "$ 299.95"
    },
    {
        id: "walker-tote",
        image: WalkerTote,
        brandImage: BuffaloJackson,
        productColor: "Rustic TAN",
        productName: "Leather Walker Tote",
        productCost: "$ 239.95"
    },
    {
        id: "walker-small-backpack",
        image: WalkerSmallBackpack,
        brandImage: BuffaloJackson,
        productColor: "Rustic TAN",
        productName: "Walker Small Backpack",
        productCost: "$ 199.95"
    },
    {
        id: "walker-leather-backpack",
        image: WalkerLeatherBackpack,
        brandImage: BuffaloJackson,
        productColor: "Rustic Tan",
        productName: "Walker Leather Backpack",
        productCost: "$ 299.95"
    },
    {
        id: "craft-belt-brown",
        image: CraftBeltBrown,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Craft Belt",
        productCost: "$ 110.00"
    },
    {
        id: "mountain-belt-dark-brown",
        image: MountainBeltDarkBrown,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Mountain Belt",
        productCost: "$ 135.00"
    },
    {
        id: "blackout-belt",
        image: BlackoutBelt,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Blackout Belt",
        productCost: "$ 115.00"
    },
    {
        id: "craft-belt-olive",
        image: CraftBeltOlive,
        brandImage: BuffaloJackson,
        productColor: "Olive",
        productName: "Craft Belt",
        productCost: "$ 120.00"
    },
    {
        id: "craft-belt-black",
        image: CraftBeltBlack,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Craft Belt",
        productCost: "$ 115.00"
    },
    {
        id: "stockton-belt",
        image: StocktonBelt,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Stockton Belt",
        productCost: "$ 125.90"
    },
    {
        id: "heritage-belt",
        image: HeritageBelt,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Heritage Belt",
        productCost: "$ 95.25"
    },
    {
        id: "craftBelt-natural",
        image: CraftBeltNatural,
        brandImage: BuffaloJackson,
        productColor: "Natural",
        productName: "Craft Belt",
        productCost: "$ 110.00"
    },
    {
        id: "mountain-belt-russet",
        image: MountainBeltRusset,
        brandImage: BuffaloJackson,
        productColor: "Russet",
        productName: "Mountain Belt",
        productCost: "$ 135.95"
    },
    {
        id: "personalized-bracelet",
        image: PersonalizedBracelet,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Personalized Leather Bracelet",
        productCost: "$ 35.90"
    },
    {
        id: "double-wrap-mountain-cuff",
        image: DoubleWrapMountainCuff,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Double Wrap Mountain Cuff",
        productCost: "$ 40.00"
    },
    {
        id: "knot-bracelet",
        image: KnotBracelet,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Brown",
        productName: "Leather Knot Bracelet",
        productCost: "$ 30.50"
    },
    {
        id: "strappy-wrap-bracelet",
        image: StrappyWrapBracelet,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Strappy Wrap Bracelet",
        productCost: "$ 30.15"
    },
    {
        id: "simple-adjustable-cuff",
        image: SimpleAdjustableCuff,
        brandImage: BuffaloJackson,
        productColor: "Black & Brown",
        productName: "Simple Adjustable Cuff",
        productCost: "$ 30.45"
    },
    {
        id: "secret-message-bracelet",
        image: SecretMessageBracelet,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Secret Message Bracelet",
        productCost: "$ 45.90"
    },
    {
        id: "hefty-braided-bracelet",
        image: HeftyBraidedBracelet,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Hefty Braided Bracelet",
        productCost: "$ 42.40"
    },
    {
        id: "single-wrap-craft-cuff",
        image: SingleWrapCraftCuff,
        brandImage: BuffaloJackson,
        productColor: "Brown & Black",
        productName: "Single Wrap Craft Cuff",
        productCost: "$ 27.00"
    },
    {
        id: "mystery-braid-bracelet",
        image: MysteryBraidBracelet,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Mystery Braid Bracelet",
        productCost: "$ 25.00"
    },
    {
        id: "brass-key-hook",
        image: BrassKeyHook,
        brandImage: BuffaloJackson,
        productColor: "Light Tan",
        productName: "Brass Key Hook",
        productCost: "$ 25.00"
    },
    {
        id: "utility-key-clip",
        image: UtilityKeyClip,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Utility Key Clip",
        productCost: "$ 30.00"
    },
    {
        id: "key-kedge",
        image: KeyKedge,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Tan",
        productName: "Leather Key Kedge",
        productCost: "$ 35.00"
    },
    {
        id: "short-key-clip",
        image: ShortKeyClip,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Short Key Clip",
        productCost: "$ 28.00"
    },
    {
        id: "tassel-key-chain",
        image: TasselKeyChain,
        brandImage: BuffaloJackson,
        productColor: "Dark Tan",
        productName: "Tassel Key Chain",
        productCost: "$ 25.00"
    },
    {
        id: "wood-brown-key-holder",
        image: WoodBrownKeyHolder,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Wood Brown Key Holder",
        productCost: "$ 32.30"
    },
    {
        id: "reserve-key-strap",
        image: ReserveKeyStrap,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Reserve Key Strap",
        productCost: "$ 24.95"
    },
    {
        id: "dark-brown-key-holder",
        image: DarkBrownKeyHolder,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Dark Brown Key Holder",
        productCost: "$ 32.10"
    },
    {
        id: "wood-brown-key-organizer",
        image: WoodBrownKeyOrganizer,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Wood Brown Key Organizer",
        productCost: "$ 25.00"
    },
    {
        id: "black-field-notes-cover",
        image: BlackFieldNotesCover,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Black Field Notes Cover",
        productCost: "$ 54.99"
    },
    {
        id: "northswestward-field-notes",
        image: NorthswestwardFieldNotes,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Northswestward Field Notes",
        productCost: "$ 81.90"
    },
    {
        id: "dakota-field-notes-cover",
        image: DakotaFieldNotesCover,
        brandImage: BuffaloJackson,
        productColor: "Chestnut Brown",
        productName: "Dakota Field Notes Cover",
        productCost: "$ 99.95"
    },
    {
        id: "horween-field-notes",
        image: HorweenFieldNotes,
        brandImage: BuffaloJackson,
        productColor: "Gray Brown",
        productName: "Horween Field Notes",
        productCost: "$ 100.00"
    },
    {
        id: "denver-journal-cover",
        image: DenverJournalCover,
        brandImage: BuffaloJackson,
        productColor: "Autumn Brown",
        productName: "Denver Journal Cover",
        productCost: "$ 74.95"
    },
    {
        id: "woodlander-notebook",
        image: WoodlanderNotebook,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Woodlander Leather Notebook",
        productCost: "$ 94.95"
    },
    {
        id: "large-denver-journal-cover",
        image: LargeDenverJournalCover,
        brandImage: BuffaloJackson,
        productColor: "Dark Briar",
        productName: "Large Denver Journal Cover",
        productCost: "$ 84.70"
    },
    {
        id: "check-book-wallet",
        image: CheckBookWallet,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "CheckBook Leather Wallet",
        productCost: "$ 254.00"
    },
    {
        id: "notebook-cover",
        image: NotebookCover,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Leather Notebook Cover",
        productCost: "$ 184.95"
    },
    {
        id: "dark-wool-felt-phone-case",
        image: DarkWoolFeltPhoneCase,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Wool Felt Phone Case",
        productCost: "$ 44.95"
    },
    {
        id: "dark-pocket-phone-case",
        image: DarkPocketPhoneCase,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Dark Pocket Phone Case",
        productCost: "$ 42.50"
    },
    {
        id: "minimalist-phone-case",
        image: MinimalistPhoneCase,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Minimalist Phone Case",
        productCost: "$ 54.70"
    },
    {
        id: "dark-minimalist-phone-case",
        image: DarkMinimalistPhoneCase,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Minimalist Phone Case",
        productCost: "$ 54.70"
    },
    {
        id: "dark-iphone-leather-case",
        image: DarkIphoneLeatherCase,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Iphone Leather Case",
        productCost: "$ 44.95"
    },
    {
        id: "two-iphone-case",
        image: TwoIphoneCase,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Two Iphone Case",
        productCost: "$ 67.85"
    },
    {
        id: "iphone-leather-case",
        image: IphoneLeatherCase,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Iphone Leather Case",
        productCost: "$ 44.95"
    },
    {
        id: "leather-pocket-phone-case",
        image: LeatherPocketPhoneCase,
        brandImage: BuffaloJackson,
        productColor: "Classic Brown",
        productName: "Leather Pocket Phone Case",
        productCost: "$ 42.50"
    },
    {
        id: "dark-two-iphone-case",
        image: DarkTwoIphoneCase,
        brandImage: BuffaloJackson,
        productColor: "Wood Brown",
        productName: "Dark Two Iphone Case",
        productCost: "$ 67.85"
    },
    {
        id: "nato-watch-strap",
        image: NatoWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Dark Brown",
        productName: "Nato Watch Strap",
        productCost: "$ 95.00"
    },
    {
        id: "dakota-apple-watch-strap",
        image: DakotaAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Dakota Apple Watch Strap",
        productCost: "$ 104.95"
    },
    {
        id: "tan-apple-watch-strap",
        image: TanAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Tan Apple Watch Strap",
        productCost: "$ 97.95"
    },
    {
        id: "diesel-apple-watch-strap",
        image: DieselAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Diesel Apple Watch Strap",
        productCost: "$ 110.00"
    },
    {
        id: "nato-apple-watch-strap",
        image: NatoAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Nato Apple Watch Strap",
        productCost: "$ 114.95"
    },
    {
        id: "honey-apple-watch-strap",
        image: HoneyAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Honey Apple Watch Strap",
        productCost: "$ 95.30"
    },
    {
        id: "black-apple-watch-strap",
        image: BlackAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Black Apple Watch Strap",
        productCost: "$ 200.00"
    },
    {
        id: "amber-apple-watch-strap",
        image: AmberAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Amber",
        productName: "Amber Apple Watch Strap",
        productCost: "$ 94.70"
    },
    {
        id: "brown-appleWatch-strap",
        image: BrownAppleWatchStrap,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Brown Apple Watch Strap",
        productCost: "$ 99.95"
    },
    {
        id: "leather-camera-strap",
        image: LeatherCameraStrap,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Leather Camera Strap",
        productCost: "$ 85.00"
    },
    {
        id: "leather-sunglass-case",
        image: LeatherSunglassCase,
        brandImage: BuffaloJackson,
        productColor: "Dark Hazelnut",
        productName: "Leather Sunglass Case",
        productCost: "$ 85.75"
    },
    {
        id: "leather-coaster-set",
        image: LeatherCoasterSet,
        brandImage: BuffaloJackson,
        productColor: "Black & Brown",
        productName: "Leather Coaster Set",
        productCost: "$ 85.00"
    },
    {
        id: "leather-parts-bag",
        image: LeatherPartsBag,
        brandImage: BuffaloJackson,
        productColor: "Brown",
        productName: "Leather Parts Bag",
        productCost: "$ 65.95"
    },
    {
        id: "lighter-sleeve",
        image: LighterSleeve,
        brandImage: BuffaloJackson,
        productColor: "Light & Dark Brown",
        productName: "Leather Lighter Sleeve",
        productCost: "$ 30.00"
    },
    {
        id: "travel-valet-tray",
        image: TravelValetTray,
        brandImage: BuffaloJackson,
        productColor: "Light Brown",
        productName: "Travel Valet Tray",
        productCost: "$ 45.00"
    },
    {
        id: "valet-tray",
        image: ValetTray,
        brandImage: BuffaloJackson,
        productColor: "SADDLE TAN",
        productName: "Leather Valet Tray",
        productCost: "$ 35.00"
    },
    {
        id: "leather-guitarStrap",
        image: LeatherGuitarStrap,
        brandImage: BuffaloJackson,
        productColor: "Black",
        productName: "Leather Guitar Strap",
        productCost: "$ 85.95"
    },
    {
        id: "leather-waistBag",
        image: LeatherWaistBag,
        brandImage: BuffaloJackson,
        productColor: "Saddle Tan",
        productName: "Leather Waist Bag",
        productCost: "$ 175.00"
    },
  ]

function Catalog () {

    const {link} = useParams();

    return (

        <>
            <Container fluid style={{padding: "0px"}}>
                <BannerConstruct/>
            </Container>
            <Container fluid style={{paddingTop: "30px"}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between px-5">
                        <div className="px-1" style={{border: "solid 1px", borderColor: "#828C76", borderRadius: "3px"}}>
                          <p className="m-0">Lorem X</p>  
                        </div>
                        <Button className="" style={{background: "none", color: "#828C76"}}>Clear All</Button>
                    </div> 
                    <Dropdown>
                        <Dropdown.Toggle style={{background: "none", color: "#828C76"}} id="dropdown-autoclose-true">
                            Featured
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor: "#2A1D18", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                            <Dropdown.Item style={{color: "#828C76"}}>BEST SELLING</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, HIGH TO LOW</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, LOW TO HIGH</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76"}} />
            </Container>
            <Container fluid className="px-5 d-flex">
                <Container>
                    <Container className="py-5">
                        <Row xs={2}  md={2} xl={3}  className="g-5">
                        {arr.map((item) => (
                            <Link key={item.id} to={`/shop/${link}/${item.id}`}>
                                <Cards 
                                    image={item.image}
                                    brandImage={item.brandImage}
                                    colorProduct={item.productColor} 
                                    nameProduct={item.productName}
                                    costProduct={item.productCost}  
                                />
                            </Link>
                        ))}
                        </Row>
                    </Container>
                </Container>
            </Container>
            
        </>
        
    )
}

export default Catalog