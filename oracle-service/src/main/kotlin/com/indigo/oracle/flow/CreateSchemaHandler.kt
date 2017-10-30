package com.indigo.oracle.flow

import co.paralleluniverse.fibers.Suspendable
import com.indigo.flow.CreateSchema
import com.indigo.oracle.service.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy

@InitiatedBy(CreateSchema::class)
class CreateSchemaHandler(val session: FlowSession) : FlowLogic<Unit?>() {

    @Suspendable
    override fun call(): Unit? {
        val claimDef = "{\"ref\":1,\"origin\":\"W4SGRU86Z58d6TV7PBUe6g\",\"signature_type\":\"CL\",\"data\":{\"primary\":{\"n\":\"99136395550777881964722073162954953931118213678144955814947712094579489985960125242311469899382326077241702510269626225686771185088844516809165314002900864711311763871323332720803711667237679956882844343498879815882875907211027852937335248181737276556819319366960008563921700147162671301372595466985588642323380151060057647887276185361672914050763544722267897466174528798988724254943244358948463365523263322626645570220451121342960211376591114781978008551715476507775841891869930026974827170635710723982832037550286697300868991573549367196294533029493422134407244633084338938177351455833731582927478459583897392940553\",\"s\":\"9499293644958544980320154463929934655967632253477712647106626244216038791210013263125699912013118379849984771483484844441677345736128721880729760353434045247067573042405587256509822858822185389932965194518298487130886975911161898175643282752017022756782449342577057509084053012770030051652097588505105551965321281835654913975294253391165417460195910786242941002038960789354119699301384272520003140117199622946572060055890287446269639906128430613430742783429053128433838769862244777055507049647657045058205070102266782503423780715439115055580912503287660949306779915169570345724087708208064018971266935728454208704374\",\"rms\":\"29209915395502154013638636903077218422782664741184201437764289139449942170795894534423041543612821626826517452987455092666197208185019327290206025567251717182709214824794049426406868700874245055812310542101620302639853714804129862464723299844735975215582698241892083895096569954273071475720399996297463131008520565133164276082165551474405225576478628596839038958286691887509006017637296936994476039380816352616267279985542996457508929054306508042642767523643844859367141864940784605679505186319279692806712659278159282225033407205014078296873962125907480739047776586812233026092353514378215529618858477326951496180121\",\"r\":{\"name\":\"96855205251254862714520690533794516852856649642186407200557087345676839308938773896037616443095864541382300366028627339589452273446381424670130112887930172106622027049313705382150522686158763205971874494453121993391856406964744789125351450611043326488340184382999665113348225702143860805019105198608193287131239825035883767721279217672315461161173667125713077046279776867006360199790209561114320702447951183067441565395769559907548407366003747511600442497465231320461832806329434404884473322014514045745322703904268938748495444485468379293668672371905216006276613260233498140313127343788290379797322355827857254498695\",\"age\":\"4333059349810279728059313741454455820834952320850676479234035967518710548248108974886587176335663966440814265487254655482411974754710458197821131798620600588853651085039206121568967677726439363553087865732836377482466362954685080401128982287064099119045264567884833983884746271545158703280174750326879872423554756267755523985049849695232055183239811346987544877222023423994969123727091699890238772943424207920730842891312189859590180772406778028919684360026488349848865037225951823761812804417635101467694719864080300769508307107591624998630903687576118557813382255428378760960454424790632629520987169473607064540366\",\"sex\":\"84746235456266859019606432695004232781651196743730957986835626862514401582962942147074239608876257752495531604395398435264409797698838011991408453263643157980015602916835196755525234446866173854817223088006425334889615286789166410035758651539765233092748812450293510098304108575317499406717533651710090956615008684254678097228291335845743757213071515996559298351969964300524310137052715182688061004812585054981607530783195400526986902079240649725318596792096375249396383845054569384384397960928605985950971083667629075338279851198704423140416818091142742275885223150017339567631659868329550562575391606682670992825293\",\"height\":\"37489274988404844932461751595166098441402036550116394768060259009873908802406420652055928613746197433929684454454054429676851758906853188841951623609383233222965313020750821425012940441332523727735483389177055145739464726342738562033785628839467567063424624772415798013192148697620525054811977880649285214087008641905961695183052646782704693512685483024972959607894574913139015414458532915289709070820018700918963234407077042507274388987127027830815824004556523825982705761791940565111105092213064754272780426079845797630786524054471011672724173985297261229643670995499171810461082119259481262152324812477208974052559\"},\"rctxt\":\"75527652440146117575825650936384235305043346249881003750698838636034790743215790858955528858131299062519429629778661307736089271909520254740923001277142141079163241147804393977219858653261871437121685558691433539197101103739586058522909082925679486229924653865817892020273895095862940532751249563522548237610078180694870944103872647418397720919770480800577404651177916889804951205666658311669702498247362870940659648574582064634597425325164917854282153192259598749448079527858085027192506642976666900547254118105957170005196041826608465481263892596934698123163763319006887297873701574664974778731103566209716019542015\",\"z\":\"79477726345281032764912659121059822507893106301918289770825783353571809685626270313613618990121332568118722748800111871557620048092062786220871651717642696013138390227238802062669306838465756066832447397751054063043343005352296616169703075245589187674595521634889611099725945621780838488445898670390144022963655396891031085944985409456849379712025770647580731565890470834623032153351393493507402512182903853559012803674921561042348385221465890807162201955806940323975762210915844141555542006109623994220518820760180240957841744814922378386640592422110363468577545682068941499863607205293579487734407425617716573907017\"},\"revocation\":null}}"
        try {
            val response = this.serviceHub.cordaService(Oracle::class.java).buildSchema(claimDef)
            return session?.send(response)
        } catch (e: Exception) {
            throw FlowException(e)
        }
    }

}