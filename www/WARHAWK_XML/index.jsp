<%--
    An emulated game server for Warhawk on the PS3®.
    Copyright © 2018 Jon | Jonathan (@JonHypersomniac)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>.
--%><%@ page contentType="text/xml;charset=UTF-8" pageEncoding="UTF-8" %><%--
--%><?xml version="1.0" encoding="UTF-8"?>
<XML>
  <URL_List>
    <%--
    <!--NOTICE: This XML file (and this folder as a whole) isn't read by the game AT ALL!!!-->
    <!-- The actual folder Warhawk uses is /WARHAWK_SVML/, XML/HTML is optionally available-->
    <!-- because it was included in a SCE-RT VO SDK for any game to use, it never took off.-->
    <!--Original Warhawk Host: http://warhawk-prod3.svo.online.scea.com:10060/WARHAWK_XML/…-->
    --%><loginURL>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/Account_Login.jsp</loginURL>
    <loginEncryptedURL>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/Account_Encrypted_Login_Submit.jsp</loginEncryptedURL>
    <logoutURL>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/Account_Logout.jsp</logoutURL>
    <mailBoxURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/mail/Mail_Box.jsp</mailBoxURL>
    <mailSendFeedbackURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/mail/Mail_Feedback.jsp</mailSendFeedbackURL>
    <msgBoardServiceURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/msgboard/MsgBoard_Topics.jsp</msgBoardServiceURL>
    <statsServiceURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/stats/Stats_Leaderboard.jsp</statsServiceURL>
    <gameCreateURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/game/Game_Create.jsp?gameMode=%d</gameCreateURL>
    <gameFinishURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/game/Game_Finish_Submit.jsp</gameFinishURL>
    <surveyServiceURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/survey/Survey_Menu.jsp</surveyServiceURL>
    <tourneyServiceURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/tourney/Tourney_Main.jsp</tourneyServiceURL>
    <contentNewsURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/content/Content_SubCategories.jsp?categoryID=0</contentNewsURL>
    <contentPromosURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/content/Content_SubCategories.jsp?categoryID=1</contentPromosURL>
    <contentFAQURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/content/Content_SubCategories.jsp?categoryID=2</contentFAQURL>
    <contentManualURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/content/Content_SubCategories.jsp?categoryID=3</contentManualURL>
    <tickerFeedURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/ticker/Ticker.jsp</tickerFeedURL>
    <accountProfileURL>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/Account_Edit_User.jsp</accountProfileURL>
    <createGamePlayerURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/game/Game_Create_Player_Submit.jsp?SVOGameID=%d&amp;playerSide=%d</createGamePlayerURL>
    <awardsURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/awards/Awards_PlayerAwards.jsp</awardsURL>
    <TicketLoginURI>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/SP_Login_Submit.jsp</TicketLoginURI>
    <SetIgnoreListURI>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/SP_UpdateIgnoreList_Submit.jsp</SetIgnoreListURI>
    <SetUniversePasswordURI>http://warhawk.gobtron.me:10060/WARHAWK_XML/account/SP_SetPassword_Submit.jsp</SetUniversePasswordURI>
    <blankXMLURI>http://warhawk.gobotron.me:10060/WARHAWK_XML/test/Test_BlankXML.jsp</blankXMLURI>
    <fileServicesHomeURL>http://warhawk.gobotron.me:10060/WARHAWK_XML/fileservices/FileServices_Home.jsp</fileServicesHomeURL>
  </URL_List>
</XML>
