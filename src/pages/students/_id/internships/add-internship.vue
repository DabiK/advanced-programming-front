<template>
    <div>
        <v-container class="add-internship-container" fluid>
            <v-form ref="form" lazy-validation>
                <div class="text-left">
                    <v-row>
                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.company') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="internship.companyName"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.company-address') }}</h4>
                            <v-text-field
                                type="text"
                                v-model="internship.companyAddress"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.start-date') }}</h4>
                            <v-text-field
                                type="date"
                                v-model="internship.internshipStartDate"
                                solo
                            ></v-text-field>
                        </v-col>

                        <v-col md="6">
                            <h4 class="mb-2">{{ $t('add-internship.form.end-date') }}</h4>
                            <v-text-field
                                type="date"
                                v-model="internship.internshipEndDate"
                                solo
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <p v-if="errorMessage !== ''" class="my-0 red--text">{{ errorMessage }}</p>
                </div>
                <div>
                    <v-btn class="base-btn primary" @click="validateForm">{{ $t('add-intern.form.create') }}</v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { AddInternshipDTO } from '~/dtos/internship/add-internship-dto'
import { pages } from '~/utils/page';

@Component({
    name: "addInternship",
    layout: pages.LAYOUT_WITH_NAVBAR,
})
export default class AddInternship extends Vue {

    internship : Partial<AddInternshipDTO> = {
        companyName: "",
        companyAddress: "",
    }
    errorMessage = ""

    validateForm() {

    }
}

</script>


<style lang="scss" scoped>
.add-internship-container {
    height: 80vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.base-btn {
    width: fit-content;
}
</style>