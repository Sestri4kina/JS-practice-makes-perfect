/**
 * Created by Sestri4kina on 11.12.2016.
 */

class TopicReplyCounter {

    constructor(topicId, replies){
        this.topicId = topicId;
        this.replies = replies || [];
        this.replyCount = this.replies.length;
    }

    addReply(reply){
        this.replies.push(reply);
        this.replyCount = this.totalReplies().length;

    }

    totalReplies(){
        return this.replies.filter( reply => !reply.isAbuse );
    }

    totalCount(){
        return this.replyCount;
    }
}

